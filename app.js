function additionner(a, b) {
    const result = a + b;
    console.log('Le résultat est', result);
    return result;
}

function division(x, y) {
    if (y === 0) {
        console.log("Division par zéro !")
        return null;
    }
return x / y;
}

console.log(additionner(5,3));

const message = 'Bonjour le monde';
console.log(message);

// if (false) {
//   console.log("Ce code ne s'exécutera jamais");
// }

const tableau = [
    'pomme',
    'banane',
    'orange'
]
console.log(tableau);


const nombre = '10';
if (nombre === 10) {
    console.log('Nombre égal à 10');
}else {
  console.log('Nombre pas égal à 10 (comparaison stricte)');
}


function toutFaire() {
  console.log('Début');
  const a = 1, b = 2, c = 3, d = 4, e = 5;
  const f = 6, g = 7, h = 8, i = 9, j = 10;
  console.log(a, b, c, d, e, f, g, h, i, j);
  console.log('Fin');
}
toutFaire();


setTimeout(() => {
  console.log('Timeout');
}, 1000);

const currentDate = new Date();
console.log(currentDate);


function fetchData() {
  fetch('https://api.example.com')
    .then(response => response.json())
    .then(data => console.log('Données reçues :', data))
    .catch(error => console.error('Erreur lors du fetch :', error));
}
fetchData()


const nombres = [1, 2, 3].map(n => n * 2);
console.log(nombres);

module.exports = {
  additionner,
  division
};