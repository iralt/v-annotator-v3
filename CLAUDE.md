# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is **V-Annotator V3**, a Vue 3 + Vuetify based text annotation library designed for distribution as an npm package. The project provides entity management functionality for text annotation tasks with a dual-purpose architecture:

1. **Library Mode**: Builds reusable Vue components for external consumption
2. **Demo Mode**: Provides a development environment with live preview capabilities

## Architecture

### Core Components Architecture
The library is built around a main annotation component (`VAnnotator`) that integrates multiple subsystems:

- **VAnnotator.vue**: Main annotation component that handles text display, entity visualization, and user interactions
- **EntityDialogs.vue**: Modal dialogs for entity CRUD operations (add/update/delete)
- **Vline.vue**: Text line rendering with entity highlighting
- **Base* components**: Low-level rendering components for entities, relations, and text

### State Management Pattern
The library uses a composable-based architecture:

- **useEntityCRUD.ts**: Manages entity creation, updating, and deletion operations with dialog state
- **useDialogState.ts**: Handles dialog visibility states for entity operations
- **Entity data flow**: Props down from parent → internal refs in VAnnotator → composables → emit back to parent

### Data Models Architecture
Complex domain models handle text annotation logic:

- **Entity.ts**: Core entity class with position tracking and text extraction
- **Entities.ts**: Collection class using interval trees for efficient range queries
- **Text.ts**: Text processing with grapheme/codepoint offset conversion
- **Label/Relation models**: Type-safe label and relationship definitions

### Dual Build System
The project uses Vite with conditional configuration (`vite.config.ts`):
- **Development (`yarn dev`)**: Serves `index.html` as a demo application from `src/demo/`
- **Production (`yarn build`)**: Builds library mode outputting to `lib/` and `types/`

## Commands

### Development
- `yarn dev` - Start development server with demo page (port 5177)
- `yarn typecheck` - Run TypeScript type checking without emitting files

### Building
- `yarn build` - Build library for npm distribution (outputs to `lib/` and `types/`)
- `yarn build:demo` - Build demo page as static site (outputs to `dist-demo/`)

### Preview
- `yarn preview` - Preview built library
- `yarn preview:demo` - Preview built demo page

## Key Development Patterns

### Entity Data Flow
Entities use a specific data flow pattern to maintain sync between parent and child components:
- Parent passes `entitiesData` prop (JSON format)
- VAnnotator converts to Entity objects via computed property
- Internal changes emit `update:entitiesData` back to parent
- Recursive update prevention using `isUpdatingFromProp` flag

### Adding New Components
1. Create component in `src/components/`
2. Export from `src/index.ts` (both individual export and plugin registration)
3. Test in demo application by importing in `src/demo/App.vue`

### Entity Data Format
All entity operations work with this JSON structure:
```typescript
interface EntityData {
  id: string | number  // UUID v7 recommended
  startOffset: number
  endOffset: number
  label: number
  text: string
  user?: number
}
```

### Vue SFC Structure
Follow the established pattern: `<script setup>`, `<template>`, `<style>` (in that order).

### Dependencies
- Vue 3 and Vuetify 3 are **peerDependencies** (not bundled with the library)
- Key dependencies: `@flatten-js/interval-tree` for entity positioning, `uuid` for ID generation, `lodash-es` for utilities