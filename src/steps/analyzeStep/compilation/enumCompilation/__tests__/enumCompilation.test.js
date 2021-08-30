import { enumCompilation } from '..';

describe('test enumCompilation', () => {
  test('test array enum', () => {
    const testFunc = jest.fn().mockReturnValue('mode');

    const component = {
      props: {
        mode: {
          type: {
            name: 'enum',
            value: [
              {
                value: 'test',
                computed: false,
              },
              {
                value: 'testing',
                computed: false,
              },
            ],
          },
          required: true,
          description: '',

        },
      },
    };

    const enumType = enumCompilation(component, { enumNameResolver: testFunc });

    expect(enumType).toEqual('type mode = "test"|"testing";');
  });

  test('test call enumNameResolver', () => {
    const testFunc = jest.fn().mockReturnValue('mode');

    const component = {
      displayName: 'displayName',
      props: {
        mode: {
          type: {
            name: 'enum',
            value: [
              {
                value: 'test',
                computed: false,
              },
              {
                value: 'testing',
                computed: false,
              },
            ],
          },
          required: true,
          description: '',

        },
      },
    };

    enumCompilation(component, { enumNameResolver: testFunc });

    expect(testFunc).toBeCalledWith(component.displayName, Object.keys(component.props)[0]);
  });

  test('test  enum item', () => {
    const testFunc = jest.fn().mockReturnValue('mode');

    const component = {
      props: {
        mode: {
          type: {
            name: 'enum',
            value:
              {
                value: 'test',
                computed: false,
              },
          },
          required: true,
          description: '',

        },
      },
    };

    const enumType = enumCompilation(component, { enumNameResolver: testFunc });

    expect(enumType).toEqual('type mode = "unknown";');
  });

  test('test  union item', () => {
    const testFunc = jest.fn().mockReturnValue('mode');

    const component = {
      props: {
        mode: {
          type: {
            name: 'union',
            value:
              {
                value: 'test',
                computed: false,
              },
          },
          required: true,
          description: '',

        },
      },
    };

    const enumType = enumCompilation(component, { enumNameResolver: testFunc });

    expect(enumType).toEqual('type mode = "unknown";');
  });

  test('test  another type', () => {
    const testFunc = jest.fn().mockReturnValue('mode');

    const component = {
      props: {
        mode: {
          type: {
            name: 'string',
            value:
              {
                value: 'test',
                computed: false,
              },
          },
          required: true,
          description: '',

        },
      },
    };

    const enumType = enumCompilation(component, { enumNameResolver: testFunc });

    expect(enumType).toEqual('');
  });
});
