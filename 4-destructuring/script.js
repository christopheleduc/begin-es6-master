//4.1 Découverte

const [a, b, c] = [1, 2, 3, 4] // déclaration de variables "a" & "b"
console.log(a) // On affiche la valeur de "a"
console.log(b) // On affiche la valeur de "b"

const {first, last, age} = {first: 'Paul', last: 'Henta', age: 35} // Idem: déclaration de variables "first" & "last"
console.log(first) // On affiche la valeur de "first"
console.log(last) // On affiche la valeur de "last"

//4.2 Application

console.log(data)

// 4.1

// 1) COMPRENEZ et COMMENTEZ le code de la première partie

// 2) Afficher le 3e élément du tableau ainsi que la propriété age de l'objet
// Je suis obligé d'ajouter des les variables "c" & "age" pour afficher ces valeurs

console.log(c)
console.log(age)

// 4.2

// 1) Pour chacunes des perturbations du fichier data.js (variable data) récupérer dans des variables puis afficher leur texte,
// date de début et date de fin.

function perturbate(){
    for (let index = 0; index < Object.keys(data).length; index++) {
        //const element = array[index];
        const {date_debut, date_fin, pert_texte} = {date_debut:Object.values(data)[index].dateDebut, date_fin:Object.values(data)[index].dateFin, pert_texte:Object.values(data)[index].texte}
        console.log(date_debut);
        console.log(date_fin);
        console.log(pert_texte);
       
    }
}

perturbate()

