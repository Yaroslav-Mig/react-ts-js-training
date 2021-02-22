export function sum(a: number, b: number): number {
  return a + b;
}
export function multiply(a: number, b: number): number {
  return a * b;
}

export function splitIntoWord(sentence: string) {
  debugger;
  return sentence
    .toLowerCase()
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '')
    .split(' ')
    .filter((item) => item !== '');
}

console.log(splitIntoWord(' JS is a - programming  language!'));
