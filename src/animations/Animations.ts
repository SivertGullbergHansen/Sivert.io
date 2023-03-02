export const top = {
    initial: { opacity: 0, y: -200 },
    animate: { opacity: 1, y: 0, x: 0 },
    exit: { opacity: 0, y: 200},
}
export const bottom = {
    initial: { opacity: 0, y: 200 },
    animate: { opacity: 1, y: 0, x: 0 },
    exit: { opacity: 0, y: -200},
}

export const left = {
    initial: { opacity: 0, x: -200 },
    animate: { opacity: 1, x: 0 },
    exit: {opacity: 0, x: 200}
}

export const right = {
    initial: { opacity: 0, x: 200 },
    animate: { opacity: 1, x: 0 },
    exit: {opacity: 0, x: -200}
}