import { ref, reactive, onMounted, onUnmounted } from "vue";

const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1000000;

let count = 0;

function genId(): string {
  count = (count + 1) % Number.MAX_SAFE_INTEGER;
  return count.toString();
}

type Toast = {
  id: string;
  open: boolean;
  message?: string;
  type?: string;
  [key: string]: unknown;
};

type Action =
  | { type: "ADD_TOAST"; toast: Toast }
  | { type: "UPDATE_TOAST"; toast: Toast }
  | { type: "DISMISS_TOAST"; toastId?: string }
  | { type: "REMOVE_TOAST"; toastId?: string };

const actionTypes = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST",
} as const;

const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>();

const addToRemoveQueue = (toastId: string, dispatch: (action: Action) => void): void => {
  if (toastTimeouts.has(toastId)) {
    return;
  }

  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId);
    dispatch({
      type: actionTypes.REMOVE_TOAST,
      toastId,
    });
  }, TOAST_REMOVE_DELAY);

  toastTimeouts.set(toastId, timeout);
};

const state = reactive<{ toasts: Toast[] }>({ toasts: [] });
const listeners: Array<(newState: typeof state) => void> = [];

const reducer = (action: Action): void => {
  switch (action.type) {
    case actionTypes.ADD_TOAST:
      state.toasts = [action.toast, ...state.toasts].slice(0, TOAST_LIMIT);
      break;

    case actionTypes.UPDATE_TOAST:
      state.toasts = state.toasts.map((t) =>
        t.id === action.toast.id ? { ...t, ...action.toast } : t
      );
      break;

    case actionTypes.DISMISS_TOAST:
      const { toastId } = action;
      if (toastId) {
        addToRemoveQueue(toastId, dispatch);
      } else {
        state.toasts.forEach((toast) => addToRemoveQueue(toast.id, dispatch));
      }
      state.toasts = state.toasts.map((t) =>
        t.id === toastId || !toastId
          ? {
            ...t,
            open: false,
          }
          : t
      );
      break;

    case actionTypes.REMOVE_TOAST:
      if (action.toastId === undefined) {
        state.toasts = [];
      } else {
        state.toasts = state.toasts.filter((t) => t.id !== action.toastId);
      }
      break;
  }

  listeners.forEach((listener) => listener(state));
};

const dispatch = (action: Action): void => {
  reducer(action);
};

export function useToast() {
  const localState = ref({ ...state });

  const updateListener = (newState: typeof state): void => {
    localState.value = { ...newState };
  };

  onMounted(() => {
    listeners.push(updateListener);
  });

  onUnmounted(() => {
    const index = listeners.indexOf(updateListener);
    if (index > -1) {
      listeners.splice(index, 1);
    }
  });

  const toast = (props: Partial<Toast>): { id: string; update: (newProps: Partial<Toast>) => void; dismiss: () => void } => {
    const id = genId();

    const update = (newProps: Partial<Toast>): void =>
      dispatch({
        type: actionTypes.UPDATE_TOAST,
        toast: { ...newProps, id, open: true },
      });

    const dismiss = (): void => dispatch({ type: actionTypes.DISMISS_TOAST, toastId: id });

    dispatch({
      type: actionTypes.ADD_TOAST,
      toast: {
        ...props,
        id,
        open: true,
        onOpenChange: (open: boolean) => {
          if (!open) dismiss();
        },
      },
    });

    return { id, update, dismiss };
  };

  return {
    state: localState,
    toast,
    dismiss: (toastId?: string): void => dispatch({ type: actionTypes.DISMISS_TOAST, toastId }),
  };
}
