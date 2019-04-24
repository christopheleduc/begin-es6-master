//5-1 Import

import {hello, showError} from './functions.js'
// import {showError} from './functions.js'

hello()

// 1) Lire et comprendre le code déjà écrit dans la première partie
// 2) Importer et utiliser la fonction showError

showError('Erreur envoyée dans la console');

// 3) Importer et utiliser la fonction anonyme définie à la fin du fichier

// import foo from './functions.js'
// foo()

// 5-2 Export
const [a, b] = [7, 9]

// 1) Exporter les fonctions du fichier math.js pour pouvoir les utiliser dans le script principal (script.js)
// var sum
import * as math from './math.js'
// math(a,b)
console.log(math.sum(a,b))
console.log(math.sub(a,b))
console.log(math.multiply(a,b))
console.log(math.divide(a,b))
console.log(math.pow(a,b))

