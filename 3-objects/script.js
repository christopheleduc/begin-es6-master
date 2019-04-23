//3.1 Object.keys

const bus = {
    vehicle: 'Urbanway CNG 12',
    id: 3221,
    line: 'C6',
    paint: 'chrono',
    garage: {
        name: 'Sassenage',
        place: '47'
    },
    equipments: ['sae', 'tft', 'speech']
    
}

//3.2 Object.values

console.log(data)

// 1) Afficher les carractéristiques du véhicule sours la forme clé : valeur (Ex: id: 3221)

console.log(bus)

// 2) Pour chacunes des perturbations du fichier data.js (variable data) afficher leur texte.

//console.log(data.SEM_10427.texte)

//console.log(Object.keys(data)[0])
//console.log(Object.values(data)[0].texte)
//console.log(Object.keys(data).length)

//console.log(data._.values(data)[0].texte)

 function perturbate(){
     for (let index = 0; index < Object.keys(data).length; index++) {
         //const element = array[index];
         console.log(Object.values(data)[index].texte);
        
     }
 }

perturbate()