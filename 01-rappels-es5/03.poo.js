var Personne = function(prenom, nom, pseudo) {
  this.nom = nom;
  this.prenom = prenom;
  this.pseudo = pseudo;
  this.getNomComplet = function() {
    return this.nom + ' ' + this.prenom + ' ' + this.pseudo;
  };
};

var jules = new Personne('Jules', 'LEMAIRE', 'jules77');
var paul = new Personne('Paul', 'LEMAIRE', 'paul44');

function afficherPersonne(personne) {
  console.log(personne.nom);
  console.log(personne.prenom);
  console.log(personne.pseudo);
  console.log(personne.getNomComplet());
}
afficherPersonne(jules);
afficherPersonne(paul);

jules.pseudo = 'jules44';
console.log(jules.getNomComplet());

console.log(jules.age);

Personne.prototype.age = 'NON RENSEIGNE';

console.log(jules.age);
jules.age = 30;
console.log(jules.age);

Personne.prototype.getInitales = function() {
  return this.prenom.charAt(0) + this.nom.charAt(0);
};
console.log(jules.getInitales());

var robert = {
  prenom: 'Robert',
  nom: 'LEPREFET',
  pseudo: 'robert77',
  getNomComplet: function() {
    return this.nom + ' ' + this.prenom + ' ' + this.pseudo;
  }
};
afficherPersonne(robert);

var Client = function(prenom, nom, pseudo, numeroClient) {
  Personne.call(this, prenom, nom, pseudo);
  this.numeroClient = numeroClient;
  this.getInfos = function() {
    return this.numeroClient + ' ' + this.nom + ' ' + this.prenom;
  };
};

var steve = new Client('Steve', 'LUCAS', 'steve44', 'A01');
afficherPersonne(steve);
console.log(steve.numeroClient);
console.log(steve.getInfos());
