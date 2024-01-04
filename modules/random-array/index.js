const randomArray = (min, max, length) => {

  const result = [];
  for(let i = 0; i < length; i++) {
  const randomNumbers = Math.floor(Math.random() * (max - min + 1)) + min;

  result.push(randomNumbers);
}

return result;

};

module.exports.randomArray = randomArray;
