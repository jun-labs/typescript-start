interface Brand {
    id: number,
    name: string
}

const oldBag = {
    id: 1,
    name: "Old Bag"
};

export const newBag: Brand = {
    id: 1,
    name: "Nike Handbag"
}

export function getBrandBag(brand: Brand) {
    return brand;
}

// 구조 정의
interface SumFunction {
    (x: number, y: number): number
}

interface StringArray {
    [index: number]: string
}

export const stringArray: StringArray = ['A', 'B', 'C'];

// Interface Dictionary Pattern
interface StringRegexDictionary {
    [key: string]: RegExp;
}

var obj: StringRegexDictionary = {
    csfFile: /\.cs%/
}

// Interface Extends
interface Person {
    name: string
}

interface Man extends Person {
    gender: string
}

export const man: Man = {
    name: "Jun",
    gender: "남자"
};
