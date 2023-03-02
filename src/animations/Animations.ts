export const delayTime = 0
export const staggerTime = .05
const exitDuration = .33
const smallMove = 50
const largeMove = 100
const exitAnimation = { opacity: 0, y: -5, transition: { duration: exitDuration, type: 'spring' } }
const enterTransition = { type: 'spring', stiffness: 200 }

export const top = {
    initial: { opacity: .0001, y: -largeMove },
    animate: { opacity: 1, y: 0, transition: enterTransition },
    exit: exitAnimation,
}

export const topSmall = {
    initial: { opacity: .0001, y: -smallMove },
    animate: { opacity: 1, y: 0, transition: enterTransition },
    exit: exitAnimation,
}

export const bottom = {
    initial: { opacity: .0001, y: largeMove },
    animate: { opacity: 1, y: 0, transition: enterTransition },
    exit: exitAnimation,
}

export const bottomSmall = {
    initial: { opacity: .0001, y: smallMove },
    animate: { opacity: 1, y: 0, transition: enterTransition },
    exit: exitAnimation,
}

export const left = {
    initial: { opacity: .0001, x: -largeMove },
    animate: { opacity: 1, x: 0, transition: enterTransition },
    exit: exitAnimation,
}

export const leftSmall = {
    initial: { opacity: .0001, x: -smallMove },
    animate: { opacity: 1, x: 0, transition: enterTransition },
    exit: exitAnimation,
}

export const right = {
    initial: { opacity: .0001, x: largeMove },
    animate: { opacity: 1, x: 0, transition: enterTransition },
    exit: exitAnimation,
}

export const rightSmall = {
    initial: { opacity: .0001, x: smallMove },
    animate: { opacity: 1, x: 0, transition: enterTransition },
    exit: exitAnimation,
}