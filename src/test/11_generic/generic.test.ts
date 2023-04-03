import {Apple, Fruit, getFruit, getFruitTypeof} from "../../study/11_generic/interface-generic";

describe('key of 테스트', () => {
    it('keyof_should_permit_registered_value', () => {
        const expected = 'name';
        expect(getFruitTypeof('name')).toBe(expected)
    });
})

describe('타입 제한 테스트', () => {
    it('when_type_limited_then_permitted_type_can_be_used', () => {
        const apple: Apple = {
            name: '1등급 사과'
        }
        const expected: Fruit<Apple> = {
            value: apple,
            selected: true
        }
        const fruit: Fruit<Apple> = {
            value: apple,
            selected: true
        }
        expect(getFruit(fruit)).toStrictEqual(expected)
    });
})