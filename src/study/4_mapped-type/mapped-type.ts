type Brand = 'Nike' | 'Adidas'
type BrandHistory = { [Name in Brand]: number }
export const brandAges: BrandHistory = {
    Nike: 100,
    Adidas: 110
}