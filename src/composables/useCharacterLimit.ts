import { ref, computed } from 'vue';

interface CharacterLimitProps {
  maxLength: number;
  initialValue?: string;
}

export function useCharacterLimit({ maxLength, initialValue = '' }: CharacterLimitProps) {
  const text = ref(initialValue);

  const characterCount = computed(() => text.value.length);
  const remainingCharacters = computed(() => maxLength - characterCount.value);

  return {
    text,
    characterCount,
    remainingCharacters,
    maxLength,
  };
}
