/**
 * @param {string} s
 * @return {string}
 */

// Jonathan-Lora
// JONATHAN-LORA
// jonathan-lora
// if j != J 
// if letter.lowercase != letter.uppercase then it is a letter
// if letter.lowercase = letter.uppercase then its not a letter
const reverseOnlyLetters = (s) => {
    
    const stringArr = s.split('');
  
    let pointerA = 0
    let pointerB = stringArr.length - 1;
    
    const checker = (letter) => {
      return letter.toLowerCase() !== letter.toUpperCase();
    };
  
    // Alan--Kim-
    // while pointerA is < pointerB {
    // while this is the case
    // if pointerA is not a letter
    // then increment that pointer index to check next index
    // or else if pointerB is not a letter
    // decrement the index of pointerB
    // and else if neiher of those cases work
    // swap pointerA and pointerB
    // then look at the next letter by incrementing
    // Pointer A index and decrementing pointerB index
    //}
    //
    //!ANDERW-SUCKS@SMASH!
  
     while(pointerA < pointerB) {
       
       if(!checker(stringArr[pointerA])) pointerA ++;
       else if(!checker(stringArr[pointerB])) pointerB --;
       else {
         
         let newPointerB = stringArr[pointerA];
         //A                   //H
         stringArr[pointerA] = stringArr[pointerB];
         //H                   //A
         stringArr[pointerB] = newPointerB;
         
         pointerA++;
         pointerB--;
      
       }
     }
  
  return stringArr.join('');
};