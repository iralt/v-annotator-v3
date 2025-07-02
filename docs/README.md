# V-Annotator V3 Documentation

Welcome to the V-Annotator V3 documentation. This directory contains comprehensive guides and references for using the V-Annotator V3 text annotation library.

## Documentation Index

### 📚 [API Reference](./api-reference.md)
Complete API documentation including:
- Component props and events
- TypeScript type definitions
- Composable functions
- Detailed usage examples
- Performance considerations
- Troubleshooting guide

## Quick Start

For a quick start, see the main [README.md](../README.md) in the project root.

## Library Overview

V-Annotator V3 is a Vue 3 + Vuetify text annotation library that provides:

- **Entity Management**: Add, edit, and delete text entities with visual labels
- **Virtual Scrolling**: Efficient rendering of large texts
- **TypeScript Support**: Full type safety and IntelliSense
- **Customizable**: Configurable labels, colors, and behavior
- **Event System**: Rich event system for integration

## Architecture

```
V-Annotator V3
├── VAnnotator (Main Component)
│   ├── Virtual Scrolling (v-virtual-scroll)
│   ├── Text Line Rendering (VLine)
│   ├── Entity Visualization
│   └── User Interactions
├── EntityDialogs (CRUD Operations)
│   ├── Add Entity Dialog
│   ├── Update Entity Dialog
│   └── Delete Entity Dialog
├── Composables
│   ├── useEntityCRUD (Entity Management)
│   └── useDialogState (Dialog Management)
└── Data Models
    ├── Entity Classes
    ├── Text Processing
    └── Label Management
```

## Development

### Project Structure
```
src/
├── components/
│   ├── VAnnotator.vue          # Main annotation component
│   ├── EntityDialogs.vue       # Entity CRUD dialogs
│   └── VLine.vue              # Text line rendering
├── composables/
│   ├── useEntityCRUD.ts        # Entity management
│   ├── useDialogState.ts       # Dialog state
│   └── models/                 # Data models
└── demo/                       # Demo application
```

### Building Documentation

To update or add to this documentation:

1. Edit the relevant `.md` files in this directory
2. Follow the existing structure and formatting
3. Include practical examples for new features
4. Update the API reference for any interface changes

## Contributing

When contributing to the library:

1. Update relevant documentation
2. Include TypeScript types in API reference
3. Add usage examples for new features
4. Update troubleshooting section for known issues

## Support

For issues, questions, or contributions:

- Check the [API Reference](./api-reference.md) for detailed usage
- Review [troubleshooting section](./api-reference.md#troubleshooting) for common issues
- See the demo application in `src/demo/` for working examples