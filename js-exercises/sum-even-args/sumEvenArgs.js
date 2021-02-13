/**
 * Calculates sum of its even arguments
 * @param  {...number} args
 */
const sumEvenArgs = (...args) => args
  .filter((number) => number % 2 === 0)
  .reduce((accumulator, number) => accumulator + number, 0);

export { sumEvenArgs };
