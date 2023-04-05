function getInt(b: number): number {
    var a = 10;

    function getIntInner(b: number): number {
        return a + b + c;
    }

    var c = 30;
    return getIntInner(b);
}

export {getInt}