interface Apple {
    name: string
}

interface Fruit<T extends Apple> {
    value: T,
    selected: boolean
}

export function getFruit<T extends Fruit<Apple>>(fruit: T): T {
    return fruit;
}

export function getFruitTypeof<T extends keyof Apple>(fruit: T): T {
    return fruit;
}

export {Apple, Fruit}