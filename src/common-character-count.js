const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
let s1="aabcc";
 let s2="adcaa";
  function getCommonCharacterCount( s1, s2 ) {
  let k=0;
  let s3 = s1.split('');
  let s4 = s2.split('');
  loop1:for(i=0; i<s3.length;i++){
  loop2: for (j=0;j<s4.length;j++){
     if (s3[i]===s4[j]){
       s4[j]='';  
       k++;
       continue loop1;
     }
     else  if(j<s4.length-1) {
       continue loop2;}
       else { continue  loop1};
   }
  }
  return k;
  }

  getCommonCharacterCount( s1, s2 );

module.exports = {
  getCommonCharacterCount
};
