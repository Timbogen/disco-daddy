/** The primary red color */
export const primaryRed = "#f2a7b9";
/** The primary blue color */
export const primaryBlue = "#56a1e2";

/**
 * The interface for an animation step
 */
export interface AnimationScript {
    /** The value that has to be reached for the animation to start */
    start: number;
    /** The end value that has to be reached for the animation to start */
    end: number;
    /** The handler that is executed if the animation is hitted */
    handler: (progression: number) => void;
}

/**
 * Executes all animations that are due
 */
export const executeAnimation = (handlers: AnimationScript[], value: number) => {
    for (const handler of handlers) {
        if (value >= handler.start && value < handler.end) {
            const progression = (value - handler.start) / (handler.end - handler.start);
            handler.handler(progression);
        }
    }
};
