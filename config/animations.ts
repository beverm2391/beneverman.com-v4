export const FADE_UP_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: "spring" } },
};

export const FADE_BLUR_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, filter: "blur(10px)"},
    show: { opacity: 1, filter: "blur(0px)"}
}