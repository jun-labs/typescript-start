import {getWord, getWordNotCloser} from "../../../functional/closer/closer";
import {getInt} from "../../../functional/closer/closer-example";

describe('클로저 내부 변수 값을 참조할 수 있고, 그 값을 반환한다.', () => {
    it('when_closer_then_can_refer_inner_variable', () => {
        expect(getWord()).toBe('Hello');
    });
})

describe('외부 변수를 참조하면 클로저가 아니지만 값은 참조할 수 있다.', () => {
    it('when_reference_outter_variable_then_that_is_not_closer_but_can_be_referenced', () => {
        expect(getWordNotCloser()).toBe('Hello');
    });
})

describe('클로저는 실행 문맥의 변수를 참조할 수 있다.', () => {
    it('when_closer_then_can_refer_context_variable', () => {
        expect(getInt(10)).toBe(50);
    });
})