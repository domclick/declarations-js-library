import prettier from 'prettier';

import { DTSBuilder } from './builder';
import { enumCompilation, interfaceCompilation, headerCompilation } from './compilation';
import * as resolvers from './resolvers';

export const analyzeStep = (libName, declarationList) => (data) => {
  const declarations = [];
  const componentsList = [];
  const isDeclarationAllComponents = declarationList.length === 0;

  data.forEach((component) => {
    const isDeclarationComponent = isDeclarationAllComponents
        || declarationList.includes(component.displayName);

    if (!component || !isDeclarationComponent) return;

    componentsList.push(component.displayName);

    const builder = new DTSBuilder(
      component,
      resolvers,
    );

    builder
      .next(enumCompilation)
      .next(interfaceCompilation)
      .next(headerCompilation);

    declarations.push(builder.getResult());
  });

  console.log('Library name:', libName);
  console.log('Components list:', componentsList.join(', '));

  return prettier.format(`
      /* libName: ${libName} */
      
     import React from "react";
     
      ${declarations.join('\n')}`,
  {
    parser: 'typescript',
  });
};
