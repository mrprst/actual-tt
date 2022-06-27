export const fibonacci: number[] = [0, 1];

export const listFibonacci = (num: number) => {
  for (let i: number = 2; i <= num; i++) {
    fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
  }
  return fibonacci;
}