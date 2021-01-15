// alert("Hello world");

$(document).ready(function() {



});


// 1 - Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso il for in tutte le proprietà.

console.log('######## 1 Esercizio ########');

var studente = {
  nome: 'John',
  cognome: 'Johnson',
  eta: '20'
};

for (var key in studente) {
  console.log(key + ' : ' + studente[key]);
}


// 2 - Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome

console.log('######## 2 Esercizio ########');

var studenti = [{
    nome: 'John',
    cognome: 'Johnson',
  },
  {
    nome: 'Arthur',
    cognome: 'Jacobs',
  },
  {
    nome: 'Ron',
    cognome: 'Arnold',
  }
];

for (var i = 0; i < studenti.length; i++) {
  for (var studente in studenti[i]) {
    console.log(studente + ' : ' + studenti[i][studente]);
  }
}

// console.log();
