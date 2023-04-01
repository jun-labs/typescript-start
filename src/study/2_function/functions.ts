export function sum(x: number, y: number): number {
    return x + y;
}

// Optional Parameter
export function sumOptional(x: string, y: string, z?: string): string {
    if (z == null) {
        return x + y;
    }
    return x + y + z;
}
