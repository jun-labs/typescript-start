interface Product {
    id: number;
    name: string;
    price: number;
    brand: string;
    stock: number
}

type ShoppingItem = Pick<Product, 'id' | 'name' | 'price'>
function fetchProduct(shoppingItem: ShoppingItem) {
    // TODO. 로직 구현
}

type UpdateProduct = Partial<Product>
function updateProduct(productItem: UpdateProduct) {
    // TODO. 로직 구현
}

interface UserProfile {
    name: string;
    email: string;
    profileUrl: string;
}

// Version 1.0
type UserProfileUpdateV1 = {
    name?: UserProfile['name'];
    email?: UserProfile['email'];
    profileUrl?: UserProfile['profileUrl']
}

// Version 2.0
type UserProfileUpdateV2 = {
    [p in 'name' | 'email' | 'profileUrl']?: UserProfile[p]
}

// Version 3.0
type UserProfileKey = keyof UserProfile
type UserProfileUpdateV3 = {
    [p in keyof UserProfile]?: UserProfile[p]
}

// Version 4.0
type Subset<T> = {
    [p in keyof T]?: T[p]
}