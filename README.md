# declarations-js-library библиотека

`declarations-js-library` is a library that can scan propsType in you file and create 
the list of declarations TS. It's useful for packages written on js.

## Installation

`npm i --save--dev @domclick/declarations-js-library`

# Properties

| Properties             | Required | Type                        | Default                                                  | Description                                                            |
|------------------------|----------|-----------------------------|----------------------------------------------------------|------------------------------------------------------------------------|
| libName                | Yes      | string                      | ''                                                       | Library name                                                           |
| path                   | No       | string                      | 'src/index.js'                                           | Path to js file or files 'src/**/*.js'                                 |
| destinationPath        | No       | string                      | 'dist/index.d.ts'                                        | Destination path for index.d.ts file                                       |
| declarationList        | No       | Array<string>               | []                                                       | Components Name to be included in index.d.ts                           |



## Usage
    
```js
// file build.js 

 const { propsTypeToTS } = require('@clic-core/declarations-js-library');

 propsTypeToTS({
  libName: 'libName',
 });
```

Run the command `node build.js` to create the index.d.ts file.

## Example

### Input
```js
 const envOptions = ['test', 'testing'];

 export const MyComponent = (props) => (<div>MyComponent</div>);

 MyComponent.propTypes = {
  env: PropTypes.oneOf(envOptions).isRequired,
  isOpen: PropTypes.bool,
  onClick: PropTypes.func,
  string: PropTypes.string,
  number: PropTypes.number,
  array: PropTypes.array.isRequired,
  obj: PropTypes.shape({ name3: PropTypes.instanceOf(Array) }).isRequired,
 };
```

### Output
```ts
/* libName: test */

 import React from "react";

 type MyComponentEnvEnum = "test" | "testing";

 interface MyComponentProps {
  env: MyComponentEnvEnum;
  isOpen?: boolean;
  onClick?: Function;
  string?: string;
  number?: number;
  array: Array<unknown>;
  obj: unknown;
 }

 export const MyComponent: React.ComponentClass<MyComponentProps>;
```

## Author
- [Kirill Zelenetsky](https://github.com/kirill375)

This project was inspired by [that project](https://github.com/jcenturion/proptypes-to-ts-declarations)


## License
Copyright Ⓒ 2021
["Sberbank Real Estate Center" Limited Liability Company](https://domclick.ru/).

[MIT License](./LICENSE.md)
