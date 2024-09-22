export const fadeInOnScroll = (delay: number, duration: number) => ({
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            delay: delay,
            duration: duration,
            ease: [0.42, 0, 0.50, 1]

        }
    }
})

export const fadeInUpSpring = (delay: number, duration: number) => ({
    hidden: { opacity: 0, y: 50, scale: 0.0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delay: delay,
            duration: duration,
            ease: [0.6, -0.05, 0.01, 0.99],
            type: "spring",
            stiffness: 100,


        }
    }
}
)
