export const interfaceCompilation = (component, {
  propsNameResolver, jsDocResolver, enumNameResolver, tsTypeResolver,
}) => `
  interface ${propsNameResolver(component)} {
    ${Object.keys(component.props).map((propName) => {
    const { type: { name, value }, description, required } = component.props[propName];
    const isRequired = required ? '' : '?';

    switch (name) {
      case 'enum':
        return `${jsDocResolver(description)} ${propName}${isRequired}: ${enumNameResolver(component.displayName, propName)};`;

      case 'func':
        return `${jsDocResolver(description)} ${propName}${isRequired}: Function;`;

      case 'array':
        return `${jsDocResolver(description)} ${propName}${isRequired}: Array<unknown>;`;

      case 'arrayOf':
        return `${jsDocResolver(description)} ${propName}${isRequired}: Array<${value.name}>;`;

      case 'objectOf':
        return `${jsDocResolver(description)} ${propName}${isRequired}: Object<${value.name}>;`;

      case 'shape':
        return `${jsDocResolver(description)} ${propName}${isRequired}: unknown;`;

      default:
        return `${jsDocResolver(description)} ${propName}${isRequired}: ${tsTypeResolver(name)};`;
    }
  }).join('\n')}
  }
`;
