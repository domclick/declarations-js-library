export const jsDocResolver = (description) => (description ? `
  /**
   ${description.split('\n').map((d) => `* ${d}`).join('\n')}
  */
` : '');
