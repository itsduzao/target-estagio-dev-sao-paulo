export function fibonacciSequenceGenerator(number) {
  let sequence = [0, 1];

  while (true) {
      let next = sequence[sequence.length - 1] + sequence[sequence.length - 2];
      if (next > number) break;
      sequence.push(next);
  }

  return sequence;
}