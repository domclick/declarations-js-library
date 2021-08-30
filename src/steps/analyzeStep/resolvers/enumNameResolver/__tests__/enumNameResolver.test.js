import { enumNameResolver } from '..';

describe('test enumNameResolver utils', () => {
  test('test ', () => {
    expect(enumNameResolver('name', 'propsName')).toEqual('NamePropsnameEnum');
  });
});
