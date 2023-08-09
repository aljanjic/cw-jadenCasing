function toJadenCase(str) {

  let result = str
    .split(' ')
    .map( word => word[0].toUpperCase() + word.slice(1))
    .join(' ')

  return result;


}

module.exports = toJadenCase;
