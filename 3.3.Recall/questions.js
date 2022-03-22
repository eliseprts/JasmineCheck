
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
    for (let elem of array) {
        const newElem = elem.split('').reverse().join('')
        newArr.push(newElem)
    }
    return newArr;
}

let everyPossiblePair = (array) => {
    return array.sort().map((v, i) => array.slice(i + 1).map(w => [v, w])).flat()
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
    const newArr = []
    for (let elem of array) {
        if (elem > 5) {
            break
        } else {
            newArr.push(elem)
        }
    }
    return newArr
}

let convertArrayToObject = (array) => {
    const object = {}
    for (let i = 0; i < array.length - 1; i += 2) {
        object[array[i]] = array[i + 1]
    }
    return object
}

let getAllLetters = (array) => {
    const newArr = array.join('').split('')
    return [...new Set(newArr)].sort()
}

let swapKeysAndValues = (object) => {
    return Object.fromEntries(Object.entries(object).map(a => a.reverse()))
}

let sumKeysAndValues = (object) => {
    const sumValues = object => Object.values(object).reduce((a, b) => a + b)
    const sumKeys = object => Object.keys(object).reduce((a, b) => Number(a) + Number(b))
    return Number(sumValues(object)) + Number(sumKeys(object))
}

let removeCapitals = (string) => {
    const arr = string.split(' ')
    const newArr = []
    for (let elem of arr) {
        const newElem = elem.substring(1)
        newArr.push(newElem)
    }
    return newArr.join(' ')
}

let roundUp = (number) => {
    return Math.round(number) + 1
}

let formatDateNicely = (date) => {
    return date.toLocaleDateString()
}

let getDomainName = (string) => {
    const newString = string.split('@').pop()
    return newString.substring(0, newString.length - 4)
}

let titleize = (string) => {
    const words = string.split(" ")
    const exceptions = ['and', 'the']
    for (let i = 0; i < words.length; i++) {
        if (i > 0 && exceptions.includes(words[i]))
            continue
        words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1)
    }
    let newString = words.join(' ')
    newString = newString.replace('. a', '. A')
    return newString;
}

let checkForSpecialCharacters = (string) => {
    const specialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/
    if (specialChar.test(string)) {
        return true
    } else {
        return false
    }
}

let squareRoot = (number) => {
    return Math.sqrt(number)
}

let factorial = (number) => {
    let product = 1
    for (let i = 1; i <= number; i += 1) {
        product = product * i
    }
    return product
}

let findAnagrams = (string) => {
    if (string.length < 2) {
        return [string]
    } else {
        let anagrams = []
        for (let i = 0; i < string.length; i++) {
            let letter = string[i]
            let shorterWord = string.substr(0, i) + string.substr(i + 1, string.length - 1)
            let shortwordArr = findAnagrams(shorterWord)
            for (let j = 0; j < shortwordArr.length; j++) {
                anagrams.push(letter + shortwordArr[j])
            }
        }
        return anagrams
    }
}

let convertToCelsius = (number) => {
    return Math.round((number - 32) * 5 / 9)
}

let letterPosition = (array) => {
    let lttrPosition = []
    for (let elem of array) {
        let code = elem.toUpperCase().charCodeAt(elem)
        if (code > 64 && code < 91)
            lttrPosition.push(code - 64)
    }
    return lttrPosition
}

