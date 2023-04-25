function fizzBuzzle(n: number): void {
  for (let i = 1; i <= n; i++) {
    console.log(getFizzBuzzle(i));
  }
}

export function getFizzBuzzle(x: number): String {
  let val = `${x}`;

  if (x % 3 === 0) {
    if (x % 5 === 0) {
      val = 'FizzBuzzle';
    } else {
      val = 'Fizz';
    }
  } else if (x % 5 === 0) {
    val = 'Buzzle';
  }
  return val;
}
