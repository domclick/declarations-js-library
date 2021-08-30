import fs from 'fs';
import { resolver, parse } from 'react-docgen';
import glob from 'glob';

export const readStep = (path) => () => {
  const files = glob.sync(path);
  const components = [];

  files.forEach((filePath) => {
    const code = fs.readFileSync(filePath, 'utf8');

    try {
      const allExportFile = resolver.findAllExportedComponentDefinitions;
      const componentsList = parse(code, allExportFile) || [];

      components.push(...componentsList);
    } catch (e) {
      // ошибка при чтении файла
      console.log(e);
    }
  });

  return components;
};
