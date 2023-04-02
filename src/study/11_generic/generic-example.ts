interface Email {
    value: string,
    selected: boolean
}

interface ProductNumber {
    value: number
}

const emails: Email[] = [
    {value: 'helloworld@gmail.com', selected: true}
]

const numberOfProducts: ProductNumber[] = [
    {value: 1},
    {value: 2},
    {value: 3}
]

emails.forEach(function (email: Email) {

})
