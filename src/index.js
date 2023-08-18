module.exports = function check(str, bracketsConfig) {
  const result = [];

  for (const char of str) {
    for (let [open, close] of bracketsConfig) {
      if (open.includes(char)) {
        const correspondingClosing = close[open.indexOf(char)];
        if (
          char === correspondingClosing &&
          result.length > 0 &&
          result[result.length - 1] === char
        ) {
          result.pop();
        } else {
          result.push(char);
        }
      } else if (close.includes(char)) {
        const correspondingOpening = open[close.indexOf(char)];
        if (!result.length || result.pop() !== correspondingOpening) {
          return false;
        }
      }
    }
  }

  return result.length === 0;
};
