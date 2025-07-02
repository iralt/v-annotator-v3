# V-Annotator V3 API Reference

Complete API documentation for the V-Annotator V3 text annotation library.

## Table of Contents

- [Installation](#installation)
- [Components](#components)
  - [VAnnotator](#vannotator)
  - [EntityDialogs](#entitydialogs)
- [Types](#types)
  - [EntityData](#entitydata)
  - [CandidateEntity](#candidateentity)
  - [EntityLabel](#entitylabel)
- [Composables](#composables)
  - [useEntityCRUD](#useentitycrud)
  - [useDialogState](#usedialogstate)
- [Events](#events)
- [Examples](#examples)

## Installation

```bash
npm install v-annotator-v3
# or
yarn add v-annotator-v3
```

### Plugin Registration

```typescript
import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import VAnnotatorV3 from 'v-annotator-v3'

const app = createApp(App)
app.use(createVuetify())
app.use(VAnnotatorV3)
```

### Individual Component Import

```typescript
import { VAnnotator, type EntityData } from 'v-annotator-v3'
```

## Components

### VAnnotator

The main text annotation component that provides entity management functionality with virtual scrolling support.

#### Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| `text` | `string` | `""` | ✅ | The text content to be annotated |
| `entitiesData` | `EntityData[]` | `[]` | ✅ | Array of entity data objects |
| `entityLabels` | `Label[]` | `[]` | ✅ | Available entity label definitions |
| `relations` | `Relation[]` | `[]` | ❌ | Relation data (future feature) |
| `relationLabels` | `Label[]` | `[]` | ❌ | Relation label definitions (future feature) |
| `selectedEntities` | `Entity[]` | `[]` | ❌ | Currently selected entities for highlighting |
| `maxLabelLength` | `number` | `10` | ❌ | Maximum length for label display |
| `allowOverlapping` | `boolean` | `false` | ❌ | Whether to allow overlapping entities |
| `graphemeMode` | `boolean` | `false` | ❌ | Use grapheme-based character counting |
| `rtl` | `boolean` | `false` | ❌ | Right-to-left text direction support |
| `dark` | `boolean` | `false` | ❌ | Dark mode styling |
| `editFlag` | `boolean` | `false` | ❌ | Enable editing functionality |
| `rightOffeset` | `number` | `50` | ❌ | Right margin offset for text layout |
| `record` | `any` | `undefined` | ❌ | Additional record data passed to events |

#### Events

| Event | Payload | Description |
|-------|---------|-------------|
| `update:entitiesData` | `EntityData[]` | Emitted when entity data is modified |
| `click:entity` | `(event: Event, entityId: string\|number, record?: any)` | Entity clicked |
| `contextmenu:entity` | `(entity: Entity, record?: any)` | Entity right-clicked |
| `add:entity` | `(event: Event, startOffset: number, endOffset: number, text: string, record?: any)` | Entity added |
| `click:relation` | `(event: Event, relation: RelationListItem)` | Relation clicked |
| `contextmenu:relation` | `(relation: RelationListItem)` | Relation right-clicked |
| `rendered` | `void` | Component finished rendering |

#### Usage Example

```vue
<template>
  <VAnnotator
    :text="text"
    :entities-data="entitiesData"
    @update:entitiesData="entitiesData = $event"
    :entity-labels="entityLabels"
    :allow-overlapping="true"
    :edit-flag="true"
    :right-offeset="50"
  />
</template>

<script setup>
import { ref } from 'vue'
import { VAnnotator } from 'v-annotator-v3'

const text = ref("Sample text for annotation.")
const entitiesData = ref([...])
const entityLabels = ref([...])
</script>
```

### EntityDialogs

Dialog component for entity CRUD operations (Add/Update/Delete). Typically used internally by VAnnotator but can be used independently.

#### Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `candidateEntity` | `CandidateEntity` | ✅ | Entity being edited |
| `entityLabels` | `Array<{id: number, text: string, color: string}>` | ✅ | Available labels |
| `dialog4Adding` | `boolean` | ✅ | Show add dialog |
| `dialog4Updating` | `boolean` | ✅ | Show update dialog |
| `dialog4Deleting` | `boolean` | ✅ | Show delete dialog |

#### Events

| Event | Payload | Description |
|-------|---------|-------------|
| `cancel` | `void` | Dialog cancelled |
| `confirm` | `'add' \| 'update' \| 'delete'` | Action confirmed |
| `updateEntityAddPrefix` | `void` | Add character to entity prefix |
| `updateEntitySubtractPrefix` | `void` | Remove character from entity prefix |
| `updateEntityAddSuffix` | `void` | Add character to entity suffix |
| `updateEntitySubtractSuffix` | `void` | Remove character from entity suffix |
| `updateCandidateEntityLabel` | `number` | Label changed |

## Types

### EntityData

Core data structure for entities in JSON format.

```typescript
interface EntityData {
  id: string | number      // Unique identifier (UUID v7 recommended)
  startOffset: number      // Start position in text
  endOffset: number        // End position in text
  label: number           // Label ID reference
  text: string            // Actual text content
  user?: number           // Optional user ID who created the entity
}
```

### CandidateEntity

Temporary entity structure used during editing operations.

```typescript
interface CandidateEntity {
  id?: number | string     // Entity ID (for updates/deletes)
  startOffset?: number     // Start position
  endOffset?: number       // End position
  label?: number          // Label ID
  user?: number           // User ID
  text?: string           // Text content
}
```

### EntityLabel

Label definition structure.

```typescript
interface EntityLabel {
  id: number              // Unique label identifier
  text: string           // Display name
  color: string          // CSS color value (hex, rgb, etc.)
}
```

### Label

Base label interface used by the system.

```typescript
interface Label {
  id: number
  text: string
  color: string
}
```

### Entity

Entity class used internally for processing.

```typescript
class Entity {
  constructor(
    readonly id: number | string,
    readonly label: number,
    readonly startOffset: number,
    readonly endOffset: number,
    text?: string
  )

  // Get text content
  getText(sourceText?: string): string

  // Check if entity overlaps with range
  isIn(startOffset: number, endOffset: number): boolean

  // Check equality with another entity
  equalTo(other: Entity): boolean

  // Check if entity starts after given offset
  startsAfter(offset: number): boolean

  // Get center position
  get center(): number
}
```

## Composables

### useEntityCRUD

Main composable for entity CRUD operations and dialog management.

#### Parameters

```typescript
function useEntityCRUD(
  entitiesData: Ref<EntityData[]>,
  text: Ref<string>
)
```

#### Returns

```typescript
{
  // Computed Entity objects from EntityData
  entities: ComputedRef<Entity[]>
  
  // Current entity being edited
  candidateEntity: Ref<CandidateEntity>
  
  // CRUD Functions
  addEntityWithDialog: (event: any, startOffset: number, endOffset: number, textValue: string) => void
  updateEntityWithDialog: (event: any, id: number | string) => void
  deleteEntityWithDialog: (entity: Entity) => void
  
  // Entity Range Adjustment
  updateEntityAddPrefix: () => void
  updateEntitySubtractPrefix: () => void
  updateEntityAddSuffix: () => void
  updateEntitySubtractSuffix: () => void
  
  // Dialog Actions
  confirmAction: (actionType: 'add' | 'update' | 'delete') => void
  cancelAction: () => void
  
  // Dialog States
  dialog4Adding: Ref<boolean>
  dialog4Updating: Ref<boolean>
  dialog4Deleting: Ref<boolean>
}
```

#### Usage

```typescript
import { useEntityCRUD } from 'v-annotator-v3'

const entitiesDataRef = ref([...])
const textRef = ref("Sample text")

const {
  entities,
  candidateEntity,
  addEntityWithDialog,
  updateEntityWithDialog,
  deleteEntityWithDialog,
  confirmAction,
  cancelAction,
  dialog4Adding,
  dialog4Updating,
  dialog4Deleting
} = useEntityCRUD(entitiesDataRef, textRef)
```

### useDialogState

Composable for managing dialog visibility states.

#### Returns

```typescript
{
  dialog4Adding: Ref<boolean>
  dialog4Updating: Ref<boolean>
  dialog4Deleting: Ref<boolean>
  
  openAddingDialog: () => void
  openUpdatingDialog: () => void
  openDeletingDialog: () => void
  
  closeAddingDialog: () => void
  closeUpdatingDialog: () => void
  closeDeletingDialog: () => void
  
  closeAllDialogs: () => void
}
```

## Events

### Entity Events

#### Text Selection (Add Entity)
Triggered when user selects text to create a new entity.

```typescript
// Event flow:
// 1. User selects text
// 2. VAnnotator calls addEntityWithDialog()
// 3. Add dialog opens
// 4. User selects label and confirms
// 5. confirmAction('add') called
// 6. Entity added to entitiesData
// 7. 'update:entitiesData' emitted
```

#### Entity Click (Update Entity)
Triggered when user clicks an existing entity.

```typescript
// Event flow:
// 1. User clicks entity
// 2. VAnnotator calls updateEntityWithDialog()
// 3. Update dialog opens with entity data
// 4. User modifies entity and confirms
// 5. confirmAction('update') called
// 6. Entity updated in entitiesData
// 7. 'update:entitiesData' emitted
```

#### Entity Right-Click (Delete Entity)
Triggered when user right-clicks an existing entity.

```typescript
// Event flow:
// 1. User right-clicks entity
// 2. VAnnotator calls deleteEntityWithDialog()
// 3. Delete dialog opens
// 4. User confirms deletion
// 5. confirmAction('delete') called
// 6. Entity removed from entitiesData
// 7. 'update:entitiesData' emitted
```

## Examples

### Complete Implementation

```vue
<template>
  <div>
    <VAnnotator
      :text="text"
      :entities-data="entitiesData"
      @update:entitiesData="handleEntitiesUpdate"
      :entity-labels="entityLabels"
      :selected-entities="selectedEntities"
      :allow-overlapping="allowOverlapping"
      :edit-flag="true"
      :right-offeset="rightOffeset"
      @click:entity="handleEntityClick"
      @contextmenu:entity="handleEntityContextMenu"
      @add:entity="handleEntityAdd"
    />
    
    <!-- Display current entities -->
    <div class="mt-4">
      <h3>Current Entities:</h3>
      <pre>{{ JSON.stringify(entitiesData, null, 2) }}</pre>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { VAnnotator, type EntityData, type EntityLabel } from 'v-annotator-v3'

// Text content
const text = ref(`
東京都渋谷区にある会社で、田中太郎さんが新しいプロジェクトを開始しました。
このプロジェクトは2024年から始まり、多くの企業が参加する予定です。
`)

// Entity data
const entitiesData = ref<EntityData[]>([
  {
    id: "entity-1",
    label: 1,
    startOffset: 0,
    endOffset: 3,
    text: "東京都",
    user: 1
  },
  {
    id: "entity-2", 
    label: 2,
    startOffset: 14,
    endOffset: 18,
    text: "田中太郎",
    user: 1
  }
])

// Available labels
const entityLabels = ref<EntityLabel[]>([
  { id: 1, text: "地名", color: "#2196F3" },
  { id: 2, text: "人名", color: "#4CAF50" },
  { id: 3, text: "組織名", color: "#FF5722" },
  { id: 4, text: "日付", color: "#FF9800" }
])

// Configuration
const allowOverlapping = ref(false)
const rightOffeset = ref(50)
const selectedEntities = computed(() => [])

// Event handlers
const handleEntitiesUpdate = (newEntities: EntityData[]) => {
  entitiesData.value = newEntities
  console.log('Entities updated:', newEntities)
}

const handleEntityClick = (event: Event, entityId: string | number, record?: any) => {
  console.log('Entity clicked:', entityId, record)
}

const handleEntityContextMenu = (entity: any, record?: any) => {
  console.log('Entity context menu:', entity, record)
}

const handleEntityAdd = (event: Event, startOffset: number, endOffset: number, text: string, record?: any) => {
  console.log('Entity added:', { startOffset, endOffset, text, record })
}
</script>
```

### Custom Entity Management

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { useEntityCRUD, type EntityData } from 'v-annotator-v3'

const text = ref("Sample text for custom management")
const entitiesData = ref<EntityData[]>([])

// Use the composable directly
const {
  entities,
  candidateEntity,
  addEntityWithDialog,
  updateEntityWithDialog,
  deleteEntityWithDialog,
  confirmAction,
  cancelAction,
  dialog4Adding,
  dialog4Updating,
  dialog4Deleting
} = useEntityCRUD(entitiesData, text)

// Custom entity creation
const createEntityProgrammatically = () => {
  const newEntity: EntityData = {
    id: `entity-${Date.now()}`,
    label: 1,
    startOffset: 0,
    endOffset: 6,
    text: "Sample",
    user: 1
  }
  
  entitiesData.value.push(newEntity)
}

// Custom entity deletion
const deleteEntityById = (id: string | number) => {
  entitiesData.value = entitiesData.value.filter(e => e.id !== id)
}
</script>
```

### Styling and Theming

```vue
<template>
  <VAnnotator
    :text="text"
    :entities-data="entitiesData"
    :entity-labels="entityLabels"
    :dark="darkMode"
    class="custom-annotator"
  />
</template>

<style scoped>
.custom-annotator {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 16px;
  background-color: #fafafa;
}

/* Dark mode support */
.custom-annotator.v-theme--dark {
  background-color: #303030;
  border-color: #424242;
}
</style>
```

## Performance Considerations

### Virtual Scrolling
The component uses Vuetify's `v-virtual-scroll` for efficient rendering of large texts:

- Only visible text lines are rendered in the DOM
- Supports thousands of text lines without performance degradation
- Dynamic height calculation for variable line heights

### Memory Management
- Entity objects are computed from JSON data to minimize memory usage
- Interval trees are used for efficient range queries
- Reactive updates are optimized to prevent unnecessary re-computations

### Best Practices

1. **Use UUID v7 for entity IDs** for better performance and uniqueness
2. **Limit entity overlap** when possible to improve rendering performance
3. **Batch entity updates** when making multiple changes
4. **Use v-model pattern** with `@update:entitiesData` for proper reactivity

## Migration Guide

### From Previous Versions

If migrating from an earlier version:

1. Update entity data format from class instances to JSON objects
2. Replace direct Entity constructor calls with EntityData objects
3. Update event handlers to use new event signatures
4. Install required peer dependencies (Vue 3, Vuetify 3)

### TypeScript Integration

```typescript
// Import types for full TypeScript support
import type { 
  EntityData, 
  CandidateEntity, 
  EntityLabel 
} from 'v-annotator-v3'

// Use types in your component
interface ComponentData {
  entities: EntityData[]
  labels: EntityLabel[]
}
```

## Troubleshooting

### Common Issues

1. **Entities not displaying**: Check that `entityLabels` array contains labels with matching IDs
2. **Virtual scroll not working**: Ensure parent container has a defined height
3. **Text selection not working**: Verify `editFlag` is set to `true`
4. **Events not firing**: Check that event handlers are properly bound

### Debug Mode

Enable debug logging:

```javascript
// Set in browser console
localStorage.setItem('v-annotator-debug', 'true')
```

### Performance Issues

For large texts (>1000 lines):
- Monitor browser dev tools for memory usage
- Consider reducing entity density
- Check virtual scroll performance in browser dev tools