function alphabetPosition(text) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let resultNumbers = []

  text = text.toLowerCase();

  for(let i = 0; i < text.length; i++) {
    let alphabetIndex = alphabet.indexOf(text[i])
    if(alphabetIndex === -1) {
      continue
    } else {
      resultNumbers.push(alphabetIndex + 1)
    }
  }
    return resultNumbers.join(' ');
}

alphabetPosition("The sunset sets at twelve o' clock.");
