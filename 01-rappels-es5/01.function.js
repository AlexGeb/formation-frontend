console.log('01 - Fonctions');
var nombre1 = 10;
var nombre2 = 20;

// addition comme fonction
function additionner(nb1, nb2) {
  return nb1 + nb2;
}
var resultat1 = additionner(nombre1, nombre2);
console.log('resultat1 = ' + resultat1);

// addition comme fonction
var somme = function(nb1, nb2) {
  return nb1 + nb2;
};
var resultat2 = somme(nombre1, nombre2);
console.log('resultat2 = ' + resultat2);

// multiplication
var multiplication = function(nb1, nb2) {
  return nb1 * nb2;
};
var resultat3 = multiplication(nombre1, nombre2);
console.log('resultat3 = ' + resultat3);

// fonction comme element du 1er ordre
var afficherOperation = function(nomOperation, operation, nb1, nb2) {
  var msg =
    nomOperation +
    ' [ nb1 = ' +
    nb1 +
    ' nb2 = ' +
    nb2 +
    '] == ' +
    operation(nb1, nb2);
  console.log(msg);
};
afficherOperation('Somme', somme, 20, 40);
afficherOperation('Multiplication', multiplication, 10, 20);
afficherOperation(
  'Soustraction',
  function(nb1, nb2) {
    return nb1 - nb2;
  },
  15,
  5
);
