const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  // console.log('members-', members)
  if (!Array.isArray(members)) { return false; }
  let dreamTeamName = [];
  for (let el of members) {
    if (typeof el === 'string') {
      dreamTeamName.push(el.trim().toUpperCase().slice(0,1));
    } else if (typeof el === 'object' && el !== undefined && el !== null) {
      if (typeof Object.keys(el)[0] === 'number') {
        for (let elDeep of el) {
          if (typeof elDeep === 'string') {
            dreamTeamName.push(el.trim().toUpperCase().slice(0,1));
          }
        }
      }
    }
  }
  return dreamTeamName.sort().join('');;
}

module.exports = {
  createDreamTeam
};
