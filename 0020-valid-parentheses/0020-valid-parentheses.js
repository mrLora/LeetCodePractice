/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = (s) => {
  const map = {
    '(' : ')',
    '{' : '}',
    '[' : ']'
  };
  const storage = [];
  
  for (const symbol of s) {
    if (map[symbol]) {
      storage.push(map[symbol])
    } else if (storage.length > 0 && storage[storage.length - 1] === symbol) {
      storage.pop()
    } else {
      return false
    }
  }
  return storage.length === 0
}
