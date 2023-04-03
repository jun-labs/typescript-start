import {getSports, Sports} from "../../study/8_enum/enum";

describe('Enum 번호 테스트', () => {
    it('enum_number_should_be_increased_by_order', () => {
        expect(Sports.Baseball).toBe(0)
        expect(Sports.Football).toBe(1)
    });
})

describe('Enum 타입 조회 테스트', () => {
    it('when_get_sports_then_result_should_be_registered_kind', () => {
        expect(getSports('Football')).toBe(Sports.Football)
    });
})
