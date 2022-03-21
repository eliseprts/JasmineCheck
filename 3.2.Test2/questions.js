const langages = ['Html', 'CSS', 'Java', 'PHP']
const nombres = [0, 1, 2, 3, 4, 5]

let CreationTableauLangages = () => {
    return langages
}

let CreationTableauNombres = () => {
    return nombres
}

let RemplacementElement = (langages) => {
    langages[2] = 'Javascript'
    return langages
}

let AjoutElementLangages = (langages) => {
    langages.push('Ruby', 'Python')
    return langages
}

let AjoutElementNombres = (nombres) => {
    nombres.unshift(-2, -1)
    return nombres
}

let SuppressionPremierElement = (langages) => {
    langages.shift('Html')
    return langages
}

let SuppressionDernierElement = (langages) => {
    langages.pop()
    return langages
}

let ConversionChaineTableau = (reseaux_sociaux_chaine) => {
    const reseaux_sociaux = reseaux_sociaux_chaine.split(',')
    return reseaux_sociaux
}

let ConversionTableauChaine = (langages) => {
    const langages_chaine = langages.toString(',')
    return langages_chaine
}

let TriTableau = (reseaux_sociaux) => {
    return reseaux_sociaux.sort()
}

let InversionTableau = (langages) => {
    return langages.reverse()
}
