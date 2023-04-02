export function logMessageString(value: string): string {
    console.log(value)
    return value;
}

// Union-Type
function logUnionType(value: string | number) {
    console.log(value)
}

function logMessage(value: string | number | boolean) {
    return value;
}

// Type-Guard: 특정 타입으로 타입의 범위를 좁혀나가는 과정
function logTypeGuard(value: string | number) {
    if (typeof value === 'string') {
        return
    }
    if (typeof value === 'number') {
        return
    }
    throw new TypeError('InvalidType')
}

// Union-Type & Interface
interface Developer {
    name: string,
    skill: string
}

interface BackendDeveloper {
    name: string,
    age: bigint
}

// Type-Safe 하지 않기 때문에 공통 타입만 사용할 수 있다.
function askDeveloper(someone: Developer | BackendDeveloper) {
    return someone.name
}

/**
 *  Intersection-Type
 *  - 모든 속성을 포함한 타입. 별도의 Type-Guard가 필요하지 않다.
 *  - Union-Type을 조금 더 많이 사용한다.
 * */
function askSomeone(someone: Developer & BackendDeveloper) {
    return someone.name + '은 ' + someone.skill + '을 사용하며, 나이는 ' + someone.age + '이다.';
}