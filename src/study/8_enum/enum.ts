export enum Sports {
    Baseball,
    Football
}

export function getSports(kind: string) {
    return Object.values(Sports)
        .values()
}