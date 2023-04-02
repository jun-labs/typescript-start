interface Mouse<T> {
    data: T
    name: string,
    type: string
}

var mouseA: Mouse<string>;
var mouseB: Mouse<number>;

// mouseA = mouseB;
