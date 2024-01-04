function alphanumeric(length) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890abcdefghijklmnopqrstuvwxyz";
  let result = "";
  for (let i = 0; i < length; i++) {
    const randomSequence = Math.floor(Math.random() * characters.length);

    result += characters[randomSequence];
  }

  return result;
}

module.exports.alphanumeric = alphanumeric;
