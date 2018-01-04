var villes = ['nantes', 'paris', 'saint-nazaire', 'angers', 'le mans'];
villes.forEach(v => {
  console.log(v);
});

console.log(
  'lettreADansToutesLesVilles == ',
  villes.every(v => v.includes('a'))
);
console.log(
  'auMoinsUneVilleAvecUnTiret == ',
  villes.some(v => v.includes('-'))
);
var villesSansTiretSansEspace = villes.filter(
  v => !(v.includes('-') || v.includes(' '))
);
villesSansTiretSansEspace.forEach(v => {
  console.log(v);
});

var villesMajusculeSeTerminantParS = villes
  .filter(v => v.slice(-1) == 's')
  .map(v => v.toUpperCase());
villesMajusculeSeTerminantParS.forEach(v => {
  console.log(v);
});
