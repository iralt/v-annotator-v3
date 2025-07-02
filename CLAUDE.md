# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is **V-Annotator V3**, a Vue 3 + Vuetify based annotation library designed for distribution as an npm package. The project has a dual-purpose architecture:

1. **Library Mode**: Builds reusable Vue components for external consumption
2. **Demo Mode**: Provides a development environment with live preview capabilities

## Architecture

### Dual Build System
The project uses Vite with conditional configuration (`vite.config.ts`) that behaves differently based on the command:
- **Development (`yarn dev`)**: Serves `index.html` as a demo application from `src/demo/`
- **Production (`yarn build`)**: Builds library mode outputting to `lib/` and `types/`

### Key Directories
- `src/index.ts`: Main library entry point that exports components and provides Vue plugin installation
- `src/components/`: Reusable Vue components (currently `DialogTest.vue`)
- `src/demo/`: Demo application files (`main.ts`, `App.vue`) for development/testing
- `lib/`: Build output for the library (generated)
- `types/`: TypeScript declaration files (generated)

### Plugin System
The library exports both individual components and a Vue plugin. Components are auto-registered when the plugin is installed via `app.use(VAnnotatorV3)`, but can also be imported individually.

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

## Development Patterns

### Adding New Components
1. Create component in `src/components/`
2. Export from `src/index.ts` (both individual export and plugin registration)
3. Test in demo application by importing in `src/demo/App.vue`
4. Update README.md with usage examples

### Vue SFC Structure
Follow the established pattern: `<script>`, `<template>`, `<style>` (in that order).

### Dependencies
- Vue 3 and Vuetify 3 are **peerDependencies** (not bundled with the library)
- Development dependencies include the build toolchain (Vite, vue-tsc, TypeScript)