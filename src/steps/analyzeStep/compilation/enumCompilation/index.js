export const enumCompilation = (component, { enumNameResolver }) => Object.keys(component.props)
  .map((propName) => {
    const { type: { name, value } } = component.props[propName];
    const varName = `type ${enumNameResolver(component.displayName, propName)}`;

    if (name !== 'enum' && name !== 'union') return;

    if (Array.isArray(value) && name === 'enum') {
      return `${varName} = ${value.map((e) => `"${e.value.replace(/^'(.*)'$/, '$1')}"`).join('|')};`;
    }

    return `${varName} = "unknown";`;
  }).join('\n');
