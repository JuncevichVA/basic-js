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
let AnyTeam= ['Matt', 'Ann', 'Dmitry', 'Max'];

 function createDreamTeam(AnyTeam) {
   let AnyTeam1=[];
   if (Array.isArray(AnyTeam)===false){
     return false;
   }
 for(var i = 0; i < AnyTeam.length; i++) {
   if(typeof(AnyTeam[i])==='string'){
     AnyTeam1[i]=AnyTeam[i].replace(/\s+/gmi, "").charAt(0).toUpperCase();

   }
 }
   return AnyTeam1.sort().join('');
}
createDreamTeam(AnyTeam);

module.exports = {
  createDreamTeam
};
