import { interfaceCompilation } from '..';

describe('test interfaceCompilation utils', () => {
  test('test type string', () => {
    const testJSDocResolver = jest.fn().mockReturnValue('testJSDocResolver');
    const testPropsNameResolver = jest.fn().mockReturnValue('testPropsNameResolver');
    const testEnumNameResolver = jest.fn().mockReturnValue('testEnumNameResolver');
    const testTsTypeResolver = jest.fn().mockReturnValue('testTsTypeResolver');

    const component = {
      description: 'description',
      displayName: 'displayName',
      props: {
        number: {
          type: {
            name: 'number',
            value:
              {
                value: 2,
                computed: false,
              },
          },
          required: true,
          description: '',

        },
        func: {
          type: {
            name: 'func',
            value:
              {
                value: 2,
                computed: false,
              },
          },
          required: true,
          description: '',

        },
        arrayOf: {
          type: {
            name: 'arrayOf',
            value:
              {
                name: 'string',
                computed: false,
              },
          },
          required: true,
          description: '',

        },
        objectOf: {
          type: {
            name: 'objectOf',
            value:
              {
                name: 'string',
                computed: false,
              },
          },
          required: true,
          description: '',

        },
        shape: {
          type: {
            name: 'shape',
          },
          required: true,
          description: '',

        },
        array: {
          type: {
            name: 'array',
          },
          required: true,
          description: '',

        },
        enum: {
          type: {
            name: 'enum',
          },
          required: true,
          description: '',

        },
      },
    };

    const interfaceText = interfaceCompilation(component, {
      jsDocResolver: testJSDocResolver,
      propsNameResolver: testPropsNameResolver,
      enumNameResolver: testEnumNameResolver,
      tsTypeResolver: testTsTypeResolver,
    });

    expect(interfaceText.replace(/\s+/g, ' ')).toEqual(
      ' interface testPropsNameResolver { testJSDocResolver number: testTsTypeResolver; testJSDocResolver func: Function; testJSDocResolver arrayOf: Array<string>; testJSDocResolver objectOf: Object<string>; testJSDocResolver shape: unknown; testJSDocResolver array: Array<unknown>; testJSDocResolver enum: testEnumNameResolver; } ',
    );
  });
});
