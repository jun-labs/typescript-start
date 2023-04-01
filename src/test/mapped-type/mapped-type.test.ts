import {brandAges} from "../../study/4_mapped-type/mapped-type";

describe('브랜드 포함 테스트', () => {
    it.each([
        ['Nike', 'Adidas'],
    ])('brandages_should_contain_nike_and_adidas', (brand: string) => {
        expect(brandAges).toHaveProperty(brand);
    });

    it.each([
        ['Jike', 'Jedidas'],
    ])('brandages_should_not_contain_jike_jedidas', (brand: string) => {
        expect(brandAges).not.toHaveProperty(brand);
    });
})
