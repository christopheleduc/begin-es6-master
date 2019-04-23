//2.1 Fonctions simples
// const sayHello = function() {
//     console.log('Hello')
// }

const sayHello = () => {
    console.log('Hello')
}

const sayMyName = (first, last) => {
    console.log(first, last)
}

const sayMyAge = (age) => {
    console.log('You are ' + age + ' years old')
}

sayHello()
sayMyName('Odile', 'Crok')
sayMyAge(23)

//----------------------//
//2.2 this

// const object = {
//     color: 'red',
//     shape: 'circle',
//     threeDimensions: false,
//     showThis: function() {
//         console.log(this)
//     }
// }

const object = {
    color: 'red',
    shape: 'circle',
    threeDimensions: false,
    showThis: function() {
        console.log(this)
    }
}

object.showThis()

//----------------------//
//2.3 Application

const odile = {
    name: {
        first: 'Odile',
        last: 'Crok'
    },
    age: 23,
    sayHello: () => {
        console.log('Hello')
    },
    sayMyName:function() {
        console.log(this.name.first + ' ' + this.name.last)
    },
    sayMyAge:function() {
        console.log('You are ' + this.age + ' years old')
    }
}

odile.sayHello()
odile.sayMyName()
odile.sayMyAge()

// 2.1

// 1) Convertissez les 3 fonctions avec la notation "Arrow function" et vérifiez que le code fonctionne comme avant la conversion

// 2.2

// 1) Avant toute modification : assurez-vous de comprendre le code déjà écrit ! Au besoin commentez-le.
// 2) Convertissez la fonction showThis en notation "Arrow function"
// 3) Observez le résultat. Que pouvez-vous en conclure ?
// Je n'ai trouvé aucuns moyens de faire ça ! On ne peut pas utiliser les fonctions fléchés avec la pseudo variable this.

// 2.3

// Complétez le code pour reproduire le comportement de la section 1 
// mais cette fois-ci grâce à l'objet odile. Vous utiliserez dès que possible des "Arrow functions".

