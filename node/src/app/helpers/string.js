const ignoreWords = ['a', 'an' , 'the', 'in', 'on', 'at', 'of', 'for', 'between', 'from', 'to', 'and'];

const capitalizeFLetter = (str) => str[0].toUpperCase() + str.slice(1)

module.exports.capitalizeHeading = (text) => {
  return text.replaceAll(/(#|##|###)(.*)/g, str => {
    const parts = str.split(' ');
    return parts.map((part, idx) => {
      if (idx === 1) return part;
      if (ignoreWords.includes(part.toLowerCase())) return part.toLowerCase(); 
      return capitalizeFLetter(part);
    }).join(' ');
  });
}