// // // Task: JS. Error handling
// // Для рекурсивної функції піднесення числа до степеня pow(base, exponent) реалізувати валідацію
// // значень, що передаються, і генерацію помилок відповідних типів. Виклик функції вкласти в блок
// // try з відловом виняткових ситуацій (помилок) різних типів з оповіщенням користувача про тип помилки.

function pow(base, exponent) {
  if (typeof base !== "number" || typeof exponent !== "number") {
    throw new TypeError("base, exponent must be numbers");
  }
  if (base < 0 || exponent < 0) {
    throw new RangeError("base, exponent must be a positive number");
  }
  if (exponent === 0) {
    return 1;
  }
  return base * pow(base, exponent - 1);
}

try {
  const base = 4;
  const exponent = 5;
  const result = pow(base, exponent);
  console.log(
    `${base} raised to the power of ${exponent} is equal to ${result}`
  );
} catch (error) {
  if (error instanceof TypeError) {
    console.log("Type error: " + error.message);
  } else if (error instanceof RangeError) {
    console.log("Range error: " + error.message);
  } else {
    console.log("Another mistake");
  }
}
