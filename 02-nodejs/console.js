const readline = require('readline');
const dataService = require('./service');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const app = (function(dataService) {
  const menu = [
    { libelle: 'Liste de tous les présentateurs', action: listerPresentateurs },
    { libelle: 'Top présentateurs', action: listerTopPresentateurs },
    { libelle: 'Liste des sessions', action: listerSessions },
    { libelle: "Détail d'une session", action: askForSessionId }
  ];

  function displayMenu(menu) {
    console.log('*** Application Conférence ***');
    for (var key in menu) {
      const id = parseInt(key) + 1;
      console.log(id + '. ' + menu[key].libelle);
    }
  }

  function start() {
    displayMenu(menu);
    rl.question('Entrez une option (1,2,3 ou 4) : \n', answer => {
      if (['1', '2', '3', '4'].some(key => key == answer)) {
        menu[parseInt(answer) - 1].action(start);
      } else {
        badInput();
      }
    });
  }
  function badInput() {
    console.log('bad input, good bye');
    rl.close();
  }

  function listerPresentateurs(callback) {
    dataService.listerTousLesPresentateurs().forEach(sp => {
      console.log(sp.firstname + ' ' + sp.lastname);
    });
    callback();
  }

  function listerTopPresentateurs(callback) {
    dataService.listerTopPresentateurs().forEach(sp => {
      console.log(sp.firstname + ' ' + sp.lastname);
    });
    callback();
  }

  function listerSessions(callback) {
    dataService.listerToutesLesSessions().forEach(sess => {
      console.log(sess.title);
    });
    callback();
  }

  function askForSessionId(callback) {
    rl.question('Entrez un identifiant de session : \n', id => {
      const session = dataService.trouverUneSession(id);
      if (session == null || session == undefined) {
        console.log('session inconnue');
      } else {
        console.log(session.desc);
        session.speakers.forEach(spName => {
          console.log(spName);
        });
      }
      callback();
    });
  }

  return {
    start
  };
})(dataService);

// Demarrage de l'appli console :
app.start();
