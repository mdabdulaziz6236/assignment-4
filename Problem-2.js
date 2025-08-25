function onlyCharacter(str) {
  if (typeof str !== "string") {
    return "Invalid";
  }

  let withoutSpace = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      withoutSpace += str[i].toUpperCase();
    }
  }

  return withoutSpace;
}
