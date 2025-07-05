export function deepCopy(val: unknown) {
    return JSON.parse(JSON.stringify(val))
}
