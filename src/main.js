const ERROR_MESSAGE = 'Wrong Input，Input again';

function genFourRandomNumber() {
    let factory = [...Array(10).keys()].sort((a, b) => 0.5 - Math.random());
    factory.length = 4;
    return factory;
}

function parseInput(input) {
    return input.split('').map(num => parseInt(num));
}
function getABNumber(realNums, guessNums) {
    let _realNums = parseInput(realNums);
    let _guessNums = parseInput(guessNums);
    let BNumber = 0;
    let ANumber = 0;
    [..._guessNums.keys()].forEach(index => {
        _realNums.indexOf(_guessNums[index]) !== -1 && _realNums[index] !== _guessNums[index] ? BNumber++ : null;
        _realNums[index] === _guessNums[index] ? ANumber++ : null;
    });
    return {A:ANumber, B:BNumber};
}
function getANumber(realNums, guessNums) {
    return getABNumber(realNums, guessNums).A;
}

function getBNumber(realNums, guessNums) {
    return getABNumber(realNums, guessNums).B;
}

function validateInput(...inputs) {
    for (let i = 0; i < inputs.length; i++) {
        if (typeof(inputs[i]) !== 'string' ||
            inputs[i].length !== 4 ||
            isNaN(inputs[i])
        ) return false;
    }
    return true
}

function guessNumber(realNums, guessNums) {
    if (!validateInput(realNums, guessNums)) {
        return ERROR_MESSAGE;
    }
    let {A:ANumber, B:BNumber} = getABNumber(realNums, guessNums);
    return [ANumber, 'A', BNumber, 'B'].join('')
}

module.exports = {
    genFourRandomNumber,
    getANumber,
    getBNumber,
    guessNumber
}