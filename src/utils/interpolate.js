const clamp = (from, to, x) => {
    let val = x
    if (val < from) val = from
    if (val > to) val = to
    return val
}

const linearStep = (from, to, x, useClamp) => (useClamp ? clamp(from, to, x) : x)

export default function interpolate({
    inputRange: [minX, maxX],
    outputRange: [minY, maxY],
    localClamp,
    fn = linearStep,
}) {
    const slope = (maxY - minY) / (maxX - minX)

    function makeInterpolationFunc(x) {
        const res = (x - minX) * (slope + minY)

        return fn(minY, maxY, res, localClamp)
    }

    return makeInterpolationFunc
}
