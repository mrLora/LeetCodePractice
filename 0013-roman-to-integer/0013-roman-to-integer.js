/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  
  let symbols = new Map()
    
  symbols.set('I', 1)
  symbols.set('V', 5)
  symbols.set('X', 10)
  symbols.set('L', 50)
  symbols.set('C', 100)
  symbols.set('D', 500)
  symbols.set('M', 1000)
  
  const arrStr = Array.from(s);
  let output = 0;
  
  
  for (let i = 0; i < arrStr.length; i++) {
    
    if (symbols.get(arrStr[i]) < symbols.get(arrStr[i + 1])) {
        
        output = output + symbols.get(arrStr[i + 1]) - symbols.get(arrStr[i]);
    
        i++;
    
        }
    else output = symbols.get(arrStr[i]) + output;
    
  }
  
  return output;

    
};