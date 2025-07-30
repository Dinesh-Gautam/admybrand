# Refactoring Plan for `src/components` - Stage 3

This document outlines the refactoring plan for the final batch of components in the `src/components` directory, focusing on the sidebar and other UI elements.

---

## Component-Specific Refactoring

### File: `Sidebar.tsx`

- **Create `useLocalStorage` Hook:** The logic for persisting the `sidebarExpanded` state to `localStorage` is a common pattern.
  - **Action:** Create a `useLocalStorage` hook in `src/hooks/useLocalStorage.ts` to encapsulate this behavior.
- **Centralize Sidebar Logic:** The click-outside and Escape key logic should not be in this component.
  - **Action:** Move this logic into the `useSidebar` hook from `src/context/SidebarContext.tsx` to keep all sidebar-related state management in one place.
- **Improve Styling with `cva`:** The component has complex, conditional class names.
  - **Action:** Use `cva` to define the `variant` styles for the sidebar in a more organized manner.
- **JSDoc:** Add comprehensive JSDoc comments.

### File: `SidebarHeader.tsx`

- **JSDoc:** Add comprehensive JSDoc comments to explain its props and purpose.

### File: `SidebarLink.tsx`

- **JSDoc:** Add comprehensive JSDoc comments.

### File: `SidebarLinkGroup.tsx`

- **Improve Prop Naming:** The prop `activecondition` is not descriptive.
  - **Action:** Rename `activecondition` to `isActive` for better clarity.
- **JSDoc:** Add comprehensive JSDoc comments, explaining the render prop pattern used.

### File: `SidebarNav.tsx`

- **Component Decomposition:** The component is doing too much. The `renderSubmenu` and `renderMenuItem` functions should be separate components.
  - **Action:** Create new components:
    - `SidebarMenuItem.tsx`: For rendering a single menu link.
    - `SidebarSubMenu.tsx`: For rendering a collapsible menu group.
- **Decouple Menu Data:** The navigation items are hardcoded via the imported `MENU_ITEMS` constant.
  - **Action:** Refactor the component to accept a `menuConfig` prop, making it reusable with different navigation structures.
- **JSDoc:** Add comprehensive JSDoc comments.

### File: `ThemeToggle.tsx`

- **Extract SVGs:** The component contains inline SVGs for the light and dark mode icons.
  - **Action:** Create `SunIcon.tsx` and `MoonIcon.tsx` in `src/components/icons` and import them.
- **JSDoc:** Add comprehensive JSDoc comments.

### File: `Tooltip.tsx`

- **Allow Custom Trigger:** The tooltip is hardcoded to use an `InfoIcon`.
  - **Action:** Refactor the component to accept a `trigger` prop, which can be any `ReactNode`. This will allow the tooltip to be attached to any element.
- **JSDoc:** Add comprehensive JSDoc comments.
