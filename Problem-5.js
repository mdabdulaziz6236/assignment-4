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
    // total += marks[i];
    total = total + marks[i];

    if (marks[i] >= 40) {
      passCount++;
    } else {
      failCount++;
    }
  }

  let finalScore = Math.round(total / marks.length);

  return {
    finalScore: finalScore,
    pass: passCount,
    fail: failCount,
  };
}
