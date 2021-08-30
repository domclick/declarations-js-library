import fs from 'fs';

export const writeStep = (destinationPath) => (data) => {
  fs.writeFileSync(destinationPath, data);
};
