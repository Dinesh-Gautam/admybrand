# Refactoring Plan for `src/components` - Stage 1

This document outlines the initial refactoring plan for the core components located directly within the `src/components` directory.

---

## High-Priority Cross-Component Refactoring

### 1. Create a Reusable `useDropdown` Hook

- **Objective:** Abstract the repetitive logic for handling dropdown behavior (opening/closing, click outside, Escape key) into a single reusable hook.
- **Affected Components:** `DateSelect`, `DropdownEditMenu`, `DropdownExport`, `DropdownFilter`.
- **Actions:**
  - Create a new hook `useDropdown` in `src/hooks/useDropdown.ts`.
  - This hook will manage `dropdownOpen` state and contain the `useEffect` logic for closing the dropdown.
  - Refactor the affected components to use this new hook, removing the duplicated code.

### 2. Extract All Inline SVGs

- **Objective:** Clean up component files by moving all inline SVG code into separate `.svg` files and importing them as React components.
- **Actions:**
  - For each component with an inline SVG, create a new file in `src/components/icons` (e.g., `FilterIcon.tsx`, `ThreeDotsIcon.tsx`).
  - Replace the inline `<svg>` elements with the new icon components.

---

## Component-Specific Refactoring

### File: `Datepicker.tsx`

- **Magic Numbers:** The initial date `new Date(2022, 0, 20)` is hardcoded. Replace it with a more sensible default, like the current date, or allow it to be passed as a prop.
- **JSDoc:** Add comprehensive JSDoc comments.

### File: `DateSelect.tsx`

- **Constants:** Move the `options` array outside of the component function to prevent it from being recreated on every render.
- **Magic Numbers:** The `selected` state is initialized with the magic number `2`. This should be a named constant (e.g., `INITIAL_SELECTED_OPTION_ID`).
- **JSDoc:** Add comprehensive JSDoc comments.

### File: `DropdownEditMenu.tsx`

- **JSDoc:** Add comprehensive JSDoc comments.

### File: `DropdownExport.tsx`

- **Single Responsibility:** The component currently handles both UI and complex export logic.
  - **Action:** Create a new utility module `src/utils/export.ts`.
  - Move the `handleExportToPdf` and `handleExportToCsv` functions into this new module.
- **Data Coupling:** The component imports data directly (`customersData`, etc.).
  - **Action:** Refactor the component to receive this data via props to improve reusability and decoupling.
- **Hardcoded Content:** The `aiSummary` string is hardcoded.
  - **Action:** Pass the summary as a prop.
- **JSDoc:** Add comprehensive JSDoc comments.

### File: `DropdownFilter.tsx`

- **Centralize Types:** The `FilterState` interface is used by other components.
  - **Action:** Move `FilterState` to a new central types file, e.g., `src/types/index.ts`.
- **Configuration over Hardcoding:** The filter checkboxes are hardcoded in the JSX.
  - **Action:** Create a configuration array that defines the filters (name, label) and generate the checkboxes by mapping over this array. This will make it easier to add or remove filters.
- **Typo:** Correct the typo `Topcahnnels` to `TopChannels` in the `FilterState` interface and throughout the component.
- **JSDoc:** Add comprehensive JSDoc comments.
