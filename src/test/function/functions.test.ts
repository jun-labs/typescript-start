import {sum, sumOptional} from "../../study/2_function/functions";

describe('덧셈 함수 테스트', () => {
    it('when_sum_two_int_parameters_then_result_should_be_parameters_sum', () => {
        expect(sum(1, 2)).toBe(3);
    });
})

describe('덧셈 함수 테스트(선택적 인자)', () => {
    it('when_even_if_not_three_parameters_then_result_should_be_drawn', () => {
        expect(sumOptional('Hello ', 'World')).toBe('Hello World');
    });
})

describe('덧셈 함수 테스트(선택적 인자)', () => {
    it('when_three_parameters_then_result_should_be_drawn', () => {
        expect(sumOptional('Hello ', 'World, ', 'Jun')).toBe('Hello World, Jun');
    });
})