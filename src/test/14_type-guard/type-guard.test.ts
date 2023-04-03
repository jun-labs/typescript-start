import {getSheep, Sheep} from "../../study/14_type-guard/type-garud";

describe('양 타입이고 나이가 1살 이상이어야 한다.', () => {
    it('when_type_is_sheep_and_age_is_over_then_one_years_old_then_should_be_not_null', () => {
        var sheep: Sheep = {
            name: 'Sheep',
            age: 3
        };
        expect(getSheep(sheep)).not.toBeNull();
    });
})

describe('나이가 한 살 미만이라면 오류가 발생한다.', () => {
    it('when_sheep_age_is_under_than_one_years_old_then_error_should_be_happend', () => {
        var sheep: Sheep = {
            name: 'Sheep',
            age: 0
        };
        expect(() => getSheep(sheep)).toThrow(Error);
        expect(() => getSheep(sheep)).toThrow('나이가 한 살 미만입니다.');
    });
})