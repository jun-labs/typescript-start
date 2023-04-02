interface Worlf {
    name: string
}

interface Sheep {
    name: string,
    age: number
}

function getSheep(target: Worlf | Sheep): target is Sheep {
    if ((target as Sheep).age < 1) {
        throw new Error('나이가 한 살 미만입니다.')
    }
    return (target as Sheep).age >= 1;
}

export {Worlf, Sheep, getSheep}