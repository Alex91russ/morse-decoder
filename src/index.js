const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  const splitByTen = expr.match(/.{1,10}/g);
  const arrayOfStringByTwo = splitByTen.map((value) => value.match(/.{1,2}/g));
  const tableCode = arrayOfStringByTwo.map((value) => {
    let result = "";
    let space = " ";
    for (let i = 0; i <= value.length; i++) {
      switch (value[i]) {
        case "00":
          break;
        case "10":
          result += ".";
          break;
        case "11":
          result += "-";
          break;
        case "**":
          return space;
        default:
          break;
      }
    }
    return result;
  });
  
  const decoder = (morse, code) => {
    result = "";
    for (let i = 0; i <= tableCode.length - 1; i++) {
      if (tableCode[i] === " ") {
        result += " ";
      } else result += MORSE_TABLE[tableCode[i]];
    }

    return result;
  };
  return decoder(MORSE_TABLE, tableCode);
}

module.exports = {
    decode
}
