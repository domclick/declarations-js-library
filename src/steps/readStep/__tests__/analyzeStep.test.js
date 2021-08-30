import glob from 'glob';
import fs from 'fs';
import { resolver, parse } from 'react-docgen';
import { readStep } from '..';

jest.mock('glob', () => ({
  sync: jest.fn().mockReturnValue(['filePath']),
}));

jest.mock('react-docgen', () => ({
  resolver: { findAllExportedComponentDefinitions: undefined },
  parse: jest.fn().mockReturnValue(['parse']),
}));

jest.mock('fs', () => ({
  readFileSync: jest.fn().mockReturnValue('code'),
}));

describe('test readStep utils', () => {
  test('test glob args', () => {
    readStep('src/App.js')();

    expect(glob.sync).toBeCalledWith('src/App.js');
  });

  test('test readFileSync args', () => {
    readStep('src/App.js')();

    expect(fs.readFileSync).toBeCalledWith('filePath', 'utf8');
  });

  test('test parse args', () => {
    readStep('src/App.js')();

    expect(parse).toBeCalledWith('code', resolver.findAllExportedComponentDefinitions);
  });

  test('test componentsList', () => {
    expect(readStep('src/App.js')()).toEqual(['parse']);
  });
});
