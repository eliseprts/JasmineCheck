
let selectElementsStartingWithA = (array) => {
    const startsWithA = array.filter(elem => elem.startsWith('a'))
    return startsWithA
}

let selectElementsStartingWithVowel = (array) => {
    return array.filter(elem => /^[aeiou]/i.test(elem))
}

let removeNullElements = (array) => {
    return array.filter(elem => { return elem !== null })
}

let removeNullAndFalseElements = (array) => {
    return array.filter(elem => { return elem !== null && elem !== false })
}

let reverseWordsInArray = (array) => {
    const newArr = []
    function reverse() {
        for (let elem of array) {
            const newElem = elem.split('').reverse().join('')
            newArr.push(newElem)
        }
    }
    reverse()
    return newArr;
}

let everyPossiblePair = (array) => {
}

let allElementsExceptFirstThree = (array) => {
    const newArr = array.slice(3)
    return newArr
}

let addElementToBeginning = (array, element) => {
    array.unshift(element)
    return array
}

let sortByLastLetter = (array) => {
    return array.sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1))
}

let getFirstHalf = (string) => {
    let x
    if (string.length % 2 == 0) {
        x = (string.length / 2)
    } else {
        x = (string.length / 2) + 1
    }
    return string.substring(0, x)
}

let makeNegative = (number) => {
    if (number > 0) {
        return -number
    } else {
        return number
    }
}

let numberOfPalindromes = (array) => {
    const newArr = []
    for (let elem of array) {
        const elemReverse = elem.split('').reverse().join('')
        if (elem === elemReverse) {
            newArr.push(elem)
        }
    }
    return newArr.length;
}

let shortestWord = (array) => {
    return array.reduce((a, b) =>
        a.length <= b.length ? a : b
    )
}

let longestWord = (array) => {
    return array.reduce((a, b) =>
        a.length >= b.length ? a : b
    )
}

let sumNumbers = (array) => {
    const x = 0
    return array.reduce((a, b) => a + b, x
    )
}

let repeatElements = (array) => {
    const newArr = array
    return array.concat(newArr);
}

let stringToNumber = (string) => {
    return new Number(string)
}

let calculateAverage = (array) => {
    const x = 0
    const sum = array.reduce((a, b) => a + b, x)
    return sum / array.length
}

let getElementsUntilGreaterThanFive = (array) => {
    return;
}

let convertArrayToObject = (array) => {
    return
}

let getAllLetters = (array) => {
    const newArr = array.join('').split('')
    return [...new Set(newArr)].sort()
}

let swapKeysAndValues = (object) => {
    const swap = object => Object.fromEntries(Object.entries(object).map(a => a.reverse()))
    return swap(object)
}

let sumKeysAndValues = (object) => {
    return 'Write your method here';
}

let removeCapitals = (string) => {
    return 'Write your method here';
}

let roundUp = (number) => {
    return 'Write your method here';
}

let formatDateNicely = (date) => {
    return 'Write your method here';
}

let getDomainName = (string) => {
    return 'Write your method here';
}

let titleize = (string) => {
    return 'Write your method here';
}

let checkForSpecialCharacters = (string) => {
    return 'Write your method here';
}

let squareRoot = (number) => {
    return 'Write your method here';
}

let factorial = (number) => {
    return 'Write your method here';
}

let findAnagrams = (string) => {
    return 'Write your method here';
}

let convertToCelsius = (number) => {
    return 'Write your method here';
}

let letterPosition = (array) => {
    return 'Write your method here';
}
