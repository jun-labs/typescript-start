export default interface Animal {
    name: string
}

// 객체에 대한 타입
export const dog: Animal = {
    name: '멍멍이'
}

/**  특정 타입에 대한 별칭
 *   - 타입의 확장이 되지 않는다.
 *   - 가능한 타입보다 인터페이스로 선언하는 것이 좋다.
 * */
export type Cat = Animal
export const cat: Cat = {
    name: '냥냥이'
}
