module.exports = function createDreamTeam(players) {
return Array.isArray(players) ? players.filter(strng => typeof (strng) ==='string').map(str => str.trim()).filter(str => str.length > 0).map(str => str[0].toUpperCase()).sort().join('') : false;
};
