const tsTypesMap = {
  bool: 'boolean',
};

export const tsTypeResolver = (propType) => tsTypesMap[propType] || propType;
