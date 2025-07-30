# Refactoring Plan for `src/components` - Stage 2

This document outlines the refactoring plan for the second batch of core components in the `src/components` directory.

---

## High-Priority Cross-Component Refactoring

### 1. Create a Reusable `useModal` Hook

- **Objective:** Abstract the logic for modal behavior (closing on outside click, Escape key) into a reusable hook.
- **Affected Components:** `ModalSearch`.
- **Actions:**
  - Create a new hook `useModal` in `src/hooks/useModal.ts`.
  - This hook will manage the modal's visibility and contain the `useEffect` logic for closing it.
  - Refactor `ModalSearch` to use this new hook.

### 2. Continue Extracting Inline SVGs

- **Objective:** Continue cleaning up components by moving all inline SVG code into separate icon files.
- **Affected Components:** `DropdownHelp`, `DropdownNotifications`, `DropdownProfile`, `Header`, `ModalSearch`.
- **Actions:**
  - Create new icon components in `src/components/icons` for each unique SVG.
  - Replace all inline `<svg>` elements with the new components.

---

## Component-Specific Refactoring

### Files: `DropdownHelp.tsx`, `DropdownNotifications.tsx`, `DropdownProfile.tsx`

- **Adopt `useDropdown` Hook:**
  - **Action:** Refactor all three components to use the `useDropdown` hook created in Stage 1 to manage their state, removing redundant code.
- **Decouple Data:**
  - **`DropdownNotifications.tsx`**: The list of notifications is hardcoded.
    - **Action:** Create a `Notification` type and refactor the component to accept an array of notifications via a `notifications` prop.
  - **`DropdownProfile.tsx`**: User information is hardcoded.
    - **Action:** Refactor to accept a `user` object prop containing name, role, and avatar.
- **JSDoc:** Add comprehensive JSDoc comments to all three components.

### File: `Header.tsx`

- **Improve Styling Logic:** The `getHeaderClassName` and `getContainerClassName` functions use string concatenation, which can be hard to manage.
  - **Action:** Introduce a utility like `cva` (class-variance-authority) to define the component's variants in a more structured and maintainable way.
- **Decouple "Smart Alerts":** The "Smart Alerts" button is hardcoded.
  - **Action:** Refactor this into a more generic slot or a component passed via props to make the header more reusable.
- **JSDoc:** Add comprehensive JSDoc comments.

### File: `ModalSearch.tsx`

- **Adopt `useModal` Hook:**
  - **Action:** Refactor the component to use the new `useModal` hook for its open/close logic.
- **Externalize Data:** The "Recent searches" and "Recent pages" are hardcoded.
  - **Action:** Refactor the component to accept `recentSearches` and `recentPages` arrays as props.
- **JSDoc:** Add comprehensive JSDoc comments.
