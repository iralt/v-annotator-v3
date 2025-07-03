import { Identifiable } from "../Label/Identifiable";
export declare class LevelManager {
    private intervalPerLevel;
    private id2level;
    update(item: Identifiable, ranges: [number, number][]): void;
    private intersectAny;
    fetchLevel(item: Identifiable): number | undefined;
    clear(): void;
}
