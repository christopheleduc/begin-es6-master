//1.1 Types simples

const name = 'Jacques'
let age = 80
let useless = 'something'

console.log(name, age, useless)

age += 1
useless = 14

console.log(name, age, useless)

//----------------------//
//1.2 Tableaux

const fruits = ['apple', 'pear', 'cherry']
const vegetables = ['potato', 'curlyflower', 'tomato']

console.log(fruits, vegetables)

fruits.push('banana')
vegetables.pop()

console.log(fruits, vegetables)

//----------------------//
//1.2 Objets

const settings = {
    sound: true,
    music: false,
    graphics: 'high',
    resolution: [1920, 1080]
}

let savedGame = {
    time: 384,
    score: 47,
    opponent: 'Lolo'
}

console.log(settings, savedGame)

savedGame = {}
settings.music = true
settings.resolution = [3840, 2160]

console.log(settings, savedGame)

// 1.1

// 1) Remplacez toutes les occurences de var par let.
// Cela ne change rien sauf la portée
// 2) Constatez que cela ne change rien. Désormais on n'utilisera plus var mais let ou const
// OK! C'est déjà ce que je faisait ...
// 3) Remplacez toutes les occurences de let par const.
// Cela génère une erreur
// 4) Expliquez l'erreur
// La variable age ne peut etre une constante puisqu'elle a voccation à voir sa valeur modifiée!
// 5) Corrigez le code en conservant le maximum de valeurs constantes
// "age" et "unless" sont modifiés à la ligne 9 & 10, donc = "let".

// 2.2

// 1) Remplacez toutes les occurences de let par const.
// 2) Expliquez l'absence l'erreur
// La definition d'un tableau avec une portée constante, n'empeche pas d'ajouter ou supprimer des valeurs dans le tableau.

// 2.3

// 1) Remplacez toutes les occurences de let par const.
// 2) Expliquez l'erreur
// "savedGame" est réinitialisé (vidé) à la ligne 45 donc = "let".
// En revanche, "settings" voit la valeur de ses objets modifiés donc on peut conserver "const"...
// Avec des objets, les valeurs peuvent etre modifiée, mais on ne peut pas les "réassigner".
// 3) Corrigez le code en conservant le maximum de valeurs constantes