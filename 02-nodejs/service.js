const data = require('./data/devfest-2015');

/** listerTousLesPresentateurs
 * @returns liste tous les présentateurs
 */
function listerTousLesPresentateurs() {
  return data.speakers;
}

/** listerToutesLesSessions
 * @returns liste toutes les sessions
 */
function listerToutesLesSessions() {
  return data.sessions;
}

/** trouverUneSession
 * @param {string} idSession
 * @returns la session avec l'id idSession
 */
function trouverUneSession(idSession) {
  return data.sessions.find(session => session.id == idSession);
}

/** listerTousLesPresentateurs
 * @returns liste toutes les sessions
 */
function listerTopPresentateurs() {
  return data.speakers.filter(speaker => speaker.topspeaker);
}
module.exports = {
  listerTousLesPresentateurs,
  listerToutesLesSessions,
  trouverUneSession,
  listerTopPresentateurs
};
