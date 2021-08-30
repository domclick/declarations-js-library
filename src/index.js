import { Runner } from './runner';
import { analyzeStep, readStep, writeStep } from './steps';

export const propsTypeToTS = ({
  libName = '',
  path = 'src/index.js',
  destinationPath = 'dist/index.d.ts',
  declarationList = [],
}) => {
  const runner = new Runner();

  runner
    .step(readStep(path))
    .step(analyzeStep(libName, declarationList))
    .step(writeStep(destinationPath))
    .end();
};
