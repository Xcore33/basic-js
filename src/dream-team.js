module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }
  const Names = members.filter(memberName => typeof memberName === 'string');
  const trimNames = Names.map(item => item.trim()); //delete incorrect symbols
  const dreamTeam = trimNames.map(item => item[0].toUpperCase());
  return dreamTeam.sort().join('');
};