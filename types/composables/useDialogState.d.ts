export declare function useDialogState(): {
    dialog4Adding: import("vue").Ref<boolean, boolean>;
    dialog4Updating: import("vue").Ref<boolean, boolean>;
    dialog4Deleting: import("vue").Ref<boolean, boolean>;
    openAddingDialog: () => void;
    closeAddingDialog: () => void;
    openUpdatingDialog: () => void;
    closeUpdatingDialog: () => void;
    openDeletingDialog: () => void;
    closeDeletingDialog: () => void;
    closeAllDialogs: () => void;
};
