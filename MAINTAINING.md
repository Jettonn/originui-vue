# Maintaining coss-ui-vue

A practical guide to keeping this repository healthy — and a blueprint you can reuse
to set up any similar Vue component project. It documents the conventions currently
in place, the routine chores, and the known future work.

## Table of contents

- [Project setup at a glance](#project-setup-at-a-glance)
- [Everyday workflow](#everyday-workflow)
- [Continuous integration](#continuous-integration)
- [Branch protection](#branch-protection)
- [Dependency maintenance](#dependency-maintenance)
- [Reviewing external PRs](#reviewing-external-prs)
- [Known constraints & future work](#known-constraints--future-work)
- [Replicating this setup on another project](#replicating-this-setup-on-another-project)

---

## Project setup at a glance

| Area | Choice |
|---|---|
| Package manager | **pnpm** (pinned via `packageManager` in `package.json`) |
| Framework | Vue 3.5 (`<script setup>` SFCs) |
| Styling | Tailwind CSS v4 (`@tailwindcss/postcss`) |
| Primitives | [Reka UI](https://reka-ui.com) (headless components) |
| Build | Vite 8 |
| Type-checking | `vue-tsc` + TypeScript 5.9 |
| Linting | ESLint 9 (flat config) + Prettier |
| Hosting | Cloudflare Pages (deploy previews per PR) |
| CI | GitHub Actions (`.github/workflows/ci.yml`) |

### Useful scripts

```bash
pnpm dev          # start the Vite dev server
pnpm build        # type-check + production build
pnpm build-only   # production build without type-check
pnpm type-check   # vue-tsc --build
pnpm lint         # eslint --fix
pnpm format       # prettier --write src/
```

---

## Everyday workflow

`main` is protected, so all changes flow through pull requests:

1. Branch off `main`: `git checkout -b <type>/<short-name>` (e.g. `feat/add-tabs`, `chore/bump-deps`).
2. Make the change. Before pushing, run the same three checks CI runs:
   ```bash
   pnpm type-check && pnpm exec eslint . && pnpm build-only
   ```
3. Push and open a PR: `gh pr create`.
4. Wait for the **Type-check, lint & build** check to pass (and resolve any review threads).
5. Merge (squash). The branch auto-deletes.

Branch name prefixes used here: `feat/`, `fix/`, `chore/`, `docs/`, `ci/`.

---

## Continuous integration

CI lives in [`.github/workflows/ci.yml`](.github/workflows/ci.yml). On every push to
`main` and every PR it runs, on Node 22 with pnpm:

- `pnpm type-check`
- `pnpm exec eslint .`
- `pnpm run build-only`

Notes:
- It uses `pnpm install --frozen-lockfile`, so **commit `pnpm-lock.yaml`** with any
  dependency change or CI fails.
- Runs for PRs from forks require a maintainer to approve the workflow the first time
  (`gh api --method POST repos/OWNER/REPO/actions/runs/<id>/approve`).

---

## Branch protection

`main` is protected with (configured via the GitHub API):

- ✅ Require a PR before merging (0 required approvals — solo-maintainer friendly)
- ✅ Require the **Type-check, lint & build** status check to pass
- ✅ Require the branch to be up to date before merging (`strict`)
- ✅ Require conversation resolution
- ✅ Block force-pushes and branch deletion
- ⚠️ Admins are **not** enforced — the owner keeps an emergency escape hatch
  (`gh pr merge --admin`)

Inspect current settings:

```bash
gh api repos/OWNER/REPO/branches/main/protection
```

---

## Dependency maintenance

Do this every month or two. The strategy is to separate **safe** bumps from
**major** bumps so a routine update never turns into a debugging session.

### 1. See what's outdated

```bash
pnpm outdated
```

### 2. Safe batch — same-major updates

These stay within the existing `^`/`~` ranges and are low-risk:

```bash
pnpm update            # updates everything allowed by package.json ranges
pnpm type-check && pnpm exec eslint . && pnpm build-only
```

Open one PR (e.g. `chore/bump-deps`), let CI verify, merge.

### 3. Major batch — one concern per PR

Major version bumps (the `Latest` column in `pnpm outdated` has a higher major than
`Current`) can carry breaking changes. Bump them in **small, related groups**, each in
its own PR, and verify after each:

```bash
pnpm add -D vite@8 @vitejs/plugin-vue@6      # example: build tooling group
pnpm type-check && pnpm exec eslint . && pnpm build-only
```

Always smoke-test the running app after a build-tool or runtime-library major, not just
the build:

```bash
pnpm dev      # or: pnpm build && pnpm preview  — then open the page
```

---

## Reviewing external PRs

For a PR from a fork where you want to make small fixes before merging:

1. Confirm the PR allows it: `gh pr view <n> --json maintainerCanModify`.
2. Fetch and check out the fork branch:
   ```bash
   git remote add <fork> https://github.com/<author>/<repo>.git
   git fetch <fork> <branch>
   git checkout -B pr-<n> <fork>/<branch>
   ```
3. Make fixes, verify locally, then push back: `git push <fork> HEAD:<branch>`.
4. Approve the fork's CI run if prompted, and merge once green.

Capture non-blocking suggestions (style, a11y, nice-to-haves) as follow-up issues
rather than expanding someone else's PR.

---

## Known constraints & future work

- **TypeScript 7 is not yet usable here.** TS 7 is the new native (Go) compiler; as of
  this writing `vue-tsc`/Volar crash on it (`ERR_PACKAGE_PATH_NOT_EXPORTED`) and
  `@typescript-eslint` caps at `typescript <6.1.0`. Stay on TS 5.9 until both support
  the native compiler, then retry.
- **`lucide-vue-next` is deprecated** in favour of `@lucide/vue`. Plan a migration:
  swap the dependency and update icon imports (the new package may rename some icons).
- **Runtime-library majors are pending** (not yet upgraded because each needs care and
  possibly code changes). Do these one PR at a time, reading each changelog first:
  `vue-router` 4→5, `pinia` 2→3, `@unhead/vue` 1→3, `@vueuse/core` 11→14,
  `tailwind-merge` 2→3, `vue-sonner` 1→2, `@iconify/vue` 4→5, `eslint` 9→10,
  `vue-gtag` 2→3.
- **Accessibility polish for the Tabs demos** is tracked in an open issue (icon-only tabs
  need `aria-label`s; a couple of focus-ring and consistency nits).
- **No automated tests yet.** CI only type-checks, lints, and builds. If interactive
  behaviour grows, consider adding Vitest + Vue Test Utils and a component smoke test,
  wired into the same CI job.

---

## Replicating this setup on another project

To give any Vue/pnpm repo the same guardrails:

1. **Pin the package manager** in `package.json` so local and CI match:
   ```json
   { "packageManager": "pnpm@10.33.0" }
   ```
2. **Add the CI workflow** — copy `.github/workflows/ci.yml`. The essentials: check out,
   set up pnpm + Node with cache, `pnpm install --frozen-lockfile`, then run
   type-check / lint / build. Add `concurrency` to cancel superseded runs.
3. **Push once so the check exists**, then **protect the default branch** referencing that
   check's name. With the GitHub CLI:
   ```bash
   gh api --method PUT repos/OWNER/REPO/branches/main/protection --input protection.json
   ```
   where `protection.json` requires the status check + a PR, blocks force-push/deletion,
   and leaves `enforce_admins: false` for a solo maintainer.
4. **Commit the lockfile** and keep it in sync (`--frozen-lockfile` in CI enforces this).
5. **Adopt the branch → PR → green CI → squash-merge** loop for every change, including
   your own.

That combination — a pinned toolchain, a lockfile, a three-command CI gate, and a
protected branch — is what keeps a small project maintainable without much overhead.
