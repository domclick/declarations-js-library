export const headerCompilation = (component, { jsDocResolver, propsNameResolver }) => `
  ${jsDocResolver(component.description)} export const ${component.displayName.replace(/ /g, '')}: React.ComponentClass<${propsNameResolver(component)}>;
`;
