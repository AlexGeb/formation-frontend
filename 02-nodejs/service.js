const data = require('./data/devfest-2015');
function listerTousLesPresentateurs() {
  return data.speakers;
}
function listerToutesLesSessions() {
  return data.sessions;
}
function trouverUneSession(idSession) {
  return data.sessions.find(session => session.id == idSession);
}
function listerTopPresentateurs() {
  return data.speakers.filter(speaker => speaker.topspeaker);
}
module.exports = {
  listerTousLesPresentateurs,
  listerToutesLesSessions,
  trouverUneSession,
  listerTopPresentateurs
};
