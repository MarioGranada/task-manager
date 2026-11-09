# Task Manager — Projects and Tasks — Working Memory

_Last updated: 2026-11-02_

## Current status

- Project creation, selection, deletion, and per-project tasks are implemented.
- Ref-based validation and the imperative portal modal work.
- Tailwind styling is configured.
- No tests or deployment workflow yet.

## Key decisions

- Kept all state in `App.jsx` so the data flow stays visible for the course exercise.
- Used a native `<dialog>` through a portal instead of a modal library.

## Known limitations and follow-ups

- No persistence; reloading loses everything.
- No confirmation before deleting a project.
- Random numeric ids are not stable across sessions.
- No tests.

## Mistakes to avoid

- Treating `null` and `undefined` as the same selection state breaks the new-project view.
- Forgetting `#modal-root` makes the modal fail to render.
- Tailwind classes in files outside the content globs are not generated.
- Deleting a project does not delete its tasks from state.

## Next steps

- Persist projects and tasks in `localStorage`.
- Add a delete confirmation for projects and tasks.
- Replace random ids with `crypto.randomUUID()`.
- Add a GitHub Pages workflow.

---

Keep this file under ~60 lines. Summarise or delete notes that no longer add value.
