function getWord(): string {
    const stringArray = ['Hello', 'World'];

    function chooseWord(): string {
        return stringArray
            .find(word => word === 'Hello')
    }

    return chooseWord();
}

const stringArray = ['Hello', 'World'];

function getWordNotCloser(): string {
    function chooseWord(): string {
        return stringArray
            .find(word => word === 'Hello')
    }

    return chooseWord();
}

export {getWord, getWordNotCloser}