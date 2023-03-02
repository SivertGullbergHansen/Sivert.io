export const delayTime = .2

export const top = {
    initial: { opacity: .0001, y: '-200px' },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: '200px'},
}
export const bottom = {
    initial: { opacity: .0001, y: '200px' },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: '-200px'},
}

export const left = {
    initial: { opacity: .0001, x: '-200px' },
    animate: { opacity: 1, x: 0 },
    exit: {opacity: 0, x: '200px'}
}

export const right = {
    initial: { opacity: .0001, x: '200px' },
    animate: { opacity: 1, x: 0 },
    exit: {opacity: 0, x: '-200px'}
}