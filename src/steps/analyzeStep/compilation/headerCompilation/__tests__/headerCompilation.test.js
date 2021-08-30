import { headerCompilation } from '..';

describe('test headerCompilation utils', () => {
  test('test with description', () => {
    const testJSDocResolver = jest.fn().mockReturnValue('testJSDocResolver');
    const testPropsNameResolver = jest.fn().mockReturnValue('testPropsNameResolver');

    const component = {
      description: 'description',
      displayName: 'displayName',
    };

    const headerText = headerCompilation(component, {
      jsDocResolver: testJSDocResolver,
      propsNameResolver: testPropsNameResolver,
    });

    expect(headerText.trim()).toEqual('testJSDocResolver export const displayName: React.ComponentClass<testPropsNameResolver>;');
  });

  test('test without description', () => {
    const testJSDocResolver = jest.fn().mockReturnValue('');
    const testPropsNameResolver = jest.fn().mockReturnValue('testPropsNameResolver');

    const component = {
      description: '',
      displayName: 'displayName',
    };

    const headerText = headerCompilation(component, {
      jsDocResolver: testJSDocResolver,
      propsNameResolver: testPropsNameResolver,
    });

    expect(headerText.trim()).toEqual('export const displayName: React.ComponentClass<testPropsNameResolver>;');
  });
});
