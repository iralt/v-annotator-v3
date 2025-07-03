import { ref, computed, type Ref } from 'vue'
import { useDialogState } from './useDialogState'
import { Entity } from './models/Label/Entity'
import { v7 as uuidv7 } from 'uuid'

export interface EntityData {
  id: string | number
  startOffset: number
  endOffset: number
  label: number
  user?: number
  text: string
}

export interface CandidateEntity {
  id?: number | string
  startOffset?: number
  endOffset?: number
  label?: number
  user?: number
  text?: string
}

export function useEntityCRUD(
  entitiesData: Ref<EntityData[]>,
  text: Ref<string>
) {
  const dialogState = useDialogState()
  const candidateEntity = ref<CandidateEntity>({
    id: 0,
    startOffset: 0,
    endOffset: 0,
    label: 1,
    user: 1,
    text: "",
  })

  const entities = computed(() =>
    entitiesData.value.map(
      (data) =>
        new Entity(
          data.id,
          data.label,
          data.startOffset,
          data.endOffset,
          data.text
        )
    )
  )

  const addEntityWithDialog = (
    _event: any,
    startOffset: number,
    endOffset: number,
    textValue: string
  ) => {
    console.log("addEntity", startOffset, endOffset, textValue)
    candidateEntity.value = {
      id: uuidv7(),
      startOffset,
      endOffset,
      label: 1,
      text: textValue.substring(startOffset, endOffset),
    }
    dialogState.openAddingDialog()
  }

  const updateEntityWithDialog = (_event: any, id: number | string) => {
    console.log("updateEntity", id)
    const found = entitiesData.value.find((e) => e.id == id)
    if (found) {
      candidateEntity.value = {
        id: found.id,
        startOffset: found.startOffset,
        endOffset: found.endOffset,
        label: found.label,
        user: found.user,
        text: found.text,
      }
    }
    dialogState.openUpdatingDialog()
  }

  const deleteEntityWithDialog = (entity: Entity) => {
    console.log("deleteEntity")
    const found = entitiesData.value.find((e) => e.id == entity.id)
    if (found) {
      candidateEntity.value = {
        id: found.id,
        startOffset: found.startOffset,
        endOffset: found.endOffset,
        label: found.label,
        user: found.user,
        text: found.text,
      }
    }
    dialogState.openDeletingDialog()
  }

  const updateEntityAddPrefix = () => {
    console.log("updateEntityAddPrefix")
    if (candidateEntity.value.startOffset !== undefined && candidateEntity.value.endOffset !== undefined) {
      candidateEntity.value.startOffset -= 1
      candidateEntity.value.text = text.value.substring(
        candidateEntity.value.startOffset,
        candidateEntity.value.endOffset
      )
    }
  }

  const updateEntitySubtractPrefix = () => {
    console.log("updateEntitySubtractPrefix")
    if (candidateEntity.value.startOffset !== undefined && candidateEntity.value.endOffset !== undefined) {
      candidateEntity.value.startOffset += 1
      candidateEntity.value.text = text.value.substring(
        candidateEntity.value.startOffset,
        candidateEntity.value.endOffset
      )
    }
  }

  const updateEntityAddSuffix = () => {
    console.log("updateEntityAddSuffix")
    if (candidateEntity.value.startOffset !== undefined && candidateEntity.value.endOffset !== undefined) {
      candidateEntity.value.endOffset += 1
      candidateEntity.value.text = text.value.substring(
        candidateEntity.value.startOffset,
        candidateEntity.value.endOffset
      )
    }
  }

  const updateEntitySubtractSuffix = () => {
    console.log("updateEntitySubtractSuffix")
    if (candidateEntity.value.startOffset !== undefined && candidateEntity.value.endOffset !== undefined) {
      candidateEntity.value.endOffset -= 1
      candidateEntity.value.text = text.value.substring(
        candidateEntity.value.startOffset,
        candidateEntity.value.endOffset
      )
    }
  }

  const confirmAction = (actionType: 'add' | 'update' | 'delete') => {
    console.log(`confirm${actionType}Entity`)
    
    switch (actionType) {
      case 'add':
        if (candidateEntity.value.startOffset !== undefined && 
            candidateEntity.value.endOffset !== undefined && 
            candidateEntity.value.label !== undefined) {
          const newEntityData: EntityData = {
            id: candidateEntity.value.id!,
            label: candidateEntity.value.label,
            startOffset: candidateEntity.value.startOffset,
            endOffset: candidateEntity.value.endOffset,
            user: candidateEntity.value.user || 1,
            text: candidateEntity.value.text || ''
          }
          entitiesData.value.push(newEntityData)
        }
        dialogState.closeAddingDialog()
        break
      case 'update':
        if (candidateEntity.value.id !== undefined &&
            candidateEntity.value.startOffset !== undefined && 
            candidateEntity.value.endOffset !== undefined && 
            candidateEntity.value.label !== undefined) {
          const entityIndex = entitiesData.value.findIndex(
            (e) => e.id == candidateEntity.value.id
          )
          if (entityIndex !== -1) {
            const updatedEntityData: EntityData = {
              id: candidateEntity.value.id!,
              label: candidateEntity.value.label,
              startOffset: candidateEntity.value.startOffset,
              endOffset: candidateEntity.value.endOffset,
              user: candidateEntity.value.user || 1,
              text: candidateEntity.value.text || ''
            }
            entitiesData.value.splice(entityIndex, 1, updatedEntityData)
          }
        }
        dialogState.closeUpdatingDialog()
        break
      case 'delete':
        console.log("Before delete - entitiesData:", entitiesData.value.length, "items")
        console.log("Deleting entity with id:", candidateEntity.value.id)
        entitiesData.value = entitiesData.value.filter(
          (e) => e.id !== candidateEntity.value.id
        )
        console.log("After delete - entitiesData:", entitiesData.value.length, "items")
        dialogState.closeDeletingDialog()
        console.log("deleted")
        break
    }
    
    candidateEntity.value = {}
  }

  const cancelAction = () => {
    console.log("cancelAction")
    candidateEntity.value = {}
    dialogState.closeAllDialogs()
  }

  return {
    entities,
    candidateEntity,
    addEntityWithDialog,
    updateEntityWithDialog,
    deleteEntityWithDialog,
    updateEntityAddPrefix,
    updateEntitySubtractPrefix,
    updateEntityAddSuffix,
    updateEntitySubtractSuffix,
    confirmAction,
    cancelAction,
    ...dialogState,
  }
}