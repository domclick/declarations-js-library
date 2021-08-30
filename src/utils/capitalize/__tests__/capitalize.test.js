import { capitalize } from '..';

describe('test capitalize utils', () => {
  test('test capitalize', () => expect(capitalize('helloWorld')).toEqual('Helloworld'));

  test('test with undef', () => expect(capitalize()).toEqual(''));
});
