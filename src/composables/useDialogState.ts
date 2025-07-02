import { ref } from 'vue'

export function useDialogState() {
  const dialog4Adding = ref<boolean>(false)
  const dialog4Updating = ref<boolean>(false)
  const dialog4Deleting = ref<boolean>(false)

  const openAddingDialog = () => {
    dialog4Adding.value = true
  }

  const closeAddingDialog = () => {
    dialog4Adding.value = false
  }

  const openUpdatingDialog = () => {
    dialog4Updating.value = true
  }

  const closeUpdatingDialog = () => {
    dialog4Updating.value = false
  }

  const openDeletingDialog = () => {
    dialog4Deleting.value = true
  }

  const closeDeletingDialog = () => {
    dialog4Deleting.value = false
  }

  const closeAllDialogs = () => {
    dialog4Adding.value = false
    dialog4Updating.value = false
    dialog4Deleting.value = false
  }

  return {
    dialog4Adding,
    dialog4Updating,
    dialog4Deleting,
    openAddingDialog,
    closeAddingDialog,
    openUpdatingDialog,
    closeUpdatingDialog,
    openDeletingDialog,
    closeDeletingDialog,
    closeAllDialogs,
  }
}