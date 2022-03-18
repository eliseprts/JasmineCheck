
let tailleString = (texte) => {
    return texte.length;
}
let remplaceECar = (texte) => {
    let a = texte.indexOf("e")
    let text = texte.substr(" ", a) + " " + texte.substr(a + 1, texte.length);
    return text;
}
let concatString = (texte1, texte2) => {
    return texte1.concat(texte2)
}
let afficherCar5 = (texte) => {
    return texte[4]
}
let afficher9Car = (texte) => {
    return texte.slice(0, 9)
}
let majusculeString = (texte) => {
    return texte.toUpperCase()
}
let minusculeString = (texte) => {
    return texte.toLowerCase()
}
let SupprEspaceString = (texte) => {
    return texte.trim()
}
let IsString = (texte) => {
    if (typeof texte === 'string') {
        return true
    } else {
        return false
    }
}
let AfficherExtensionString = (texte) => {
    return texte.split('.').pop()
}
let NombreEspaceString = (texte) => {
    let n = (texte.split(" ").length - 1)
    return n
}

let InverseString = (texte) => {
    let splitString = texte.split('')
    let reverseArray = splitString.reverse()
    let inverseString = reverseArray.join('')
    return inverseString
}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
let calculPuissance = (x, y) => {
    return Math.pow(x, y)
}
let valeurAbsolue = (nombre) => {
    return Math.abs(nombre)
}
let valeurAbsolueArray = (array) => {
    const absArray = []
    for (let elem of array) {
        let absElem = Math.abs(elem)
        absArray.push(absElem)
    }
    return absArray
}
let sufaceCercle = (rayon) => {
    let surface = Math.ceil(Math.PI * Math.pow(rayon, 2))
    return surface
}
let hypothenuse = (ab, ac) => {
    let hypothenuse = Math.hypot(ab, ac)
    return hypothenuse
}
let calculIMC = (poids, taille) => {
    let IMC = poids / Math.pow(taille, 2)
    let IMCrounded = Number(IMC.toFixed(2))
    return IMCrounded
}
