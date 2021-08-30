import { capitalize } from '../../../../utils';

export const enumNameResolver = (name, propName) => {
  const capitalizeName = capitalize(name);
  const capitalizePropName = capitalize(propName);

  return `${capitalizeName}${capitalizePropName}Enum`;
};
