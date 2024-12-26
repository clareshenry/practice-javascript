// There were days in math class when I wished I had a simple way to quickly solve for any given variable in a formula and check my answers accordingly.
// If only I had a time machine...

// Oh well! Anyhow, using the following formula:

// Angle (in Radians) === Arc length / Radius length
// Write a function thetaFormula:

// 1. When given two of the values and "?" returns the number value of the missing one.
// 2. When given all three values returns a boolean value verifying if the statement is true or false.
// 3. When given one or no values as arguments or invalid arguments returns null.

// For Example:

//     thetaFormula("?", 12, 35)        -->    0.343
//     thetaFormula(3, "?", 14)         -->    42
//     thetaFormula(5, 16, "?")         -->    3.2

//     thetaFormula(2, 5, 7)            -->    false
//     thetaFormula(2, 20, 10)          -->    true
//     thetaFormula( -1, 1, -1)         -->    true

//     thetaFormula(1, 2)               -->   null
//     thetaFormula(1)                  -->   null
//     thetaFormula()                   -->   null
//     thetaFormula("?", "?", 2)        -->   null

// If the returned value contains more than three numbers after the decimal it should be fixed to three decimal places.
// The function should be able to return negative values, they will be tested for.

// CODE WARS EXCERCISE LINK -> https://www.codewars.com/kata/567610d21541a88876000024/train/javascript

function thetaFormula(radius, arc, angle) {
  if (arguments.length !== 3) return null;

  // Calculate missing value
  if (radius === "?") {
    // radius = arc / angle
    if (typeof arc === "number" && typeof angle === "number" && angle !== 0) {
      return parseFloat((arc / angle).toFixed(3));
    }
  } else if (arc === "?") {
    // arc = angle * radius
    if (typeof radius === "number" && typeof angle === "number") {
      return parseFloat((angle * radius).toFixed(3));
    }
  } else if (angle === "?") {
    // angle = arc / radius
    if (typeof radius === "number" && typeof arc === "number" && radius !== 0) {
      return parseFloat((arc / radius).toFixed(3));
    }
  } else {
    // Verify if the statement is true or false
    if (
      typeof radius === "number" &&
      typeof arc === "number" &&
      typeof angle === "number"
    ) {
      return (
        parseFloat((arc / radius).toFixed(3)) === parseFloat(angle.toFixed(3))
      );
    }
  }

  // Return null for invalid scenarios
  return null;
}

function thetaFormula(radius, arc, angle) {
  if (arguments.length !== 3) return null;

  let nums = 0,
    inv = false;

  [radius, arc, angle].forEach((v) => {
    if (typeof v === "number") ++nums;
    else if (v !== "?") inv = true;
  });

  if (inv || nums < 2) return null;

  if (radius === "?") {
    return +(arc / angle).toFixed(3);
  }
  if (arc === "?") {
    return +(angle * radius).toFixed(3);
  }
  if (angle === "?") {
    return +(arc / radius).toFixed(3);
  }

  return angle === arc / radius;
}

// Example usage:
console.log(thetaFormula("?", 12, 35)); // 0.343
console.log(thetaFormula(3, "?", 14)); // 42
console.log(thetaFormula(5, 16, "?")); // 3.2
console.log(thetaFormula(2, 5, 7)); // false
console.log(thetaFormula(2, 20, 10)); // true
console.log(thetaFormula(-1, 1, -1)); // true
console.log(thetaFormula(1, 2)); // null
console.log(thetaFormula(1)); // null
console.log(thetaFormula()); // null
console.log(thetaFormula("?", "?", 2)); // null

