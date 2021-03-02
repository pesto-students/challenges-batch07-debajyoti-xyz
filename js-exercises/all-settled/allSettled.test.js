import { allSettled } from './allSettled';

describe('allSettled', () => {
  it('should works', () => {
    const error = new Error('an error');
    expect(
      allSettled([
        Promise.resolve(33),
        new Promise((resolve) => setTimeout(() => resolve(66), 0)),
        99,
        Promise.reject(error),
      ]),
    ).resolves.toEqual([
      { status: 'fulfilled', value: 33 },
      { status: 'fulfilled', value: 66 },
      { status: 'fulfilled', value: 99 },
      { status: 'rejected', reason: error },
    ]);
  });
});
