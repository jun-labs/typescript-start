import {getBoolean, getNumber, getString} from "../../study/12_type-inference/type-inference";

describe('타입 추론 테스트', () => {
    it('when_not_specify_concrete_type_then_tyescript_can_infer_type', () => {
        expect(getString('Hello')).toBe('Hello')
        expect(getNumber(300)).toBe(300)
        expect(getBoolean(true)).toBe(true)
    });
})