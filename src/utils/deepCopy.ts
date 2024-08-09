export function deepCopy(val: any) {
    return JSON.parse(JSON.stringify(val))
}
