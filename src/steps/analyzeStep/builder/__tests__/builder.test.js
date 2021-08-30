import { DTSBuilder } from '..';

describe('test DTSBuilder', () => {
  test('test call strategy', () => {
    const component = 'component';
    const resolver = 'resolver';

    const builder = new DTSBuilder(component, resolver);
    const testFunc = jest.fn().mockReturnValue('testFunc');
    builder.next(testFunc);

    expect(testFunc).toHaveBeenCalledTimes(1);
    expect(testFunc).toBeCalledWith(component, resolver);
  });

  test('test result DTSBuilder', () => {
    const component = 'component';
    const resolver = 'resolver';

    const builder = new DTSBuilder(component, resolver);
    const testFunc = jest.fn().mockReturnValue('World');
    builder.next(jest.fn().mockReturnValue('Hello')).next(testFunc);

    expect(builder.getResult()).toEqual('HelloWorld');
  });
});
