//Problem-1

function totalFine(fare) {
  if (typeof fare !== "number" || fare <= 0) {
    return "Invalid";
  }
  let fine = fare + (fare * 20) / 100 + 30;
  return fine;
}

//Problem-2

function onlyCharacter(str) {
  if (typeof str !== "string") {
    return "Invalid";
  }

  let withoutSpace = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      withoutSpace = withoutSpace + str[i].toUpperCase();
    }
  }

  return withoutSpace;
}

// Problem-3

function bestTeam(player1, player2) {
  if (typeof player1 !== "object" || typeof player2 !== "object") {
    return "Invalid";
  }
  let total1 = player1.foul + player1.cardY + player1.cardR;
  let total2 = player2.foul + player2.cardY + player2.cardR;

  if (total1 < total2) {
    return player1.name;
  } else if (total2 < total1) {
    return player2.name;
  } else {
    return "Tie";
  }
}

//Problem-4

function isSame(arr1, arr2) {
  if (Array.isArray(arr1) === false || Array.isArray(arr2) === false) {
    return "Invalid";
  }

  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
}

//Problem-5

function resultReport(marks) {
  if (Array.isArray(marks) === false) {
    return "Invalid";
  }

  if (marks.length === 0) {
    return { finalScore: 0, pass: 0, fail: 0 };
  }

  let total = 0;
  let passCount = 0;
  let failCount = 0;

  for (let i = 0; i < marks.length; i++) {
    total = total + marks[i];

    if (marks[i] >= 40) {
      passCount++;
    } else {
      failCount++;
    }
  }

  let totalScore = Math.round(total / marks.length);

  return {
    finalScore: totalScore,
    pass: passCount,
    fail: failCount,
  };
}
