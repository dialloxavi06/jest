import { getFizzBuzzle } from '../../metier/ex1/FizzBuzzle';

test('pas de modif', () => {
  expect(getFizzBuzzle(2)).toBe('2');
});

test('3', () => {
  expect(getFizzBuzzle(3)).toBe('Fizz');
});

test('multiple de 3', () => {
  expect(getFizzBuzzle(6)).toBe('Fizz');
});

test('5', () => {
  expect(getFizzBuzzle(5)).toBe('Buzzle');
});

test('multiple de 5', () => {
  expect(getFizzBuzzle(20)).toBe('Buzzle');
});

test('multiple de 3 et 5', () => {
  expect(getFizzBuzzle(15)).toBe('FizzBuzzle');
});
