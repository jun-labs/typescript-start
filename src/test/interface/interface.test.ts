import {newBag, getBrandBag, stringArray} from "../../study/3_interface/interface";

describe('브랜드 가방 조회 테스트', () => {
    it('when_get_nike_brandbag_then_result_should_be_this', () => {
        expect(getBrandBag(newBag).id).toBe(1);
        expect(getBrandBag(newBag).name).toBe('Nike Handbag');
    });
})

describe('String 배열 contains 테스트', () => {
    it('when_stringarry_contains_string_then_result_should_be_true', () => {
        expect(stringArray).toContainEqual('A');
        expect(stringArray).toContainEqual('B');
        expect(stringArray).toContainEqual('C');
    });
})