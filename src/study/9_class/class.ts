class Bird {
    private name: string;
    private age: number;

    constructor(
        name: string,
        age: number
    ) {
        this.name = name;
        this.age = age;
    }
}

export function createBird(
    name: string,
    age: number
): Bird {
    return new Bird(name, age);
}