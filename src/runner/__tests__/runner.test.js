import { Runner } from '..';

describe('test Runner utils', () => {
  test('test call steps', () => {
    const runner = new Runner();
    const testFunc = jest.fn();
    runner.step(testFunc).step(testFunc).end();

    expect(testFunc).toHaveBeenCalledTimes(2);
  });

  test('test call steps with args', () => {
    const runner = new Runner();
    const testFuncRead = jest.fn().mockReturnValue('Read');
    const testFuncAnalyze = jest.fn().mockReturnValue('Analyze');
    const testFuncWrite = jest.fn().mockReturnValue('Write');

    runner.step(testFuncRead).step(testFuncAnalyze).step(testFuncWrite).end();

    expect(testFuncRead).toBeCalledWith('');
    expect(testFuncAnalyze).toBeCalledWith('Read');
    expect(testFuncWrite).toBeCalledWith('Analyze');
  });
});
