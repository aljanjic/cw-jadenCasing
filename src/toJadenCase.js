function toJadenCase(str) {

  console.log(typeof str)
  if (typeof str !== 'string') {
    return
  }

  if (str.length === 0 ) return str;

  let result = str
    .split(' ')
    .map( word => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(' ')

  return result;

  // if (typeof str !== 'string') return;

  // return str.replace(/\b[a-z]/g, (letter) => {
  //   return letter.toUpperCase()
  // })

}

module.exports = toJadenCase;
