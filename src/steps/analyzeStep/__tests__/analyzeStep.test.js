import { analyzeStep } from '..';
import { DTSBuilder } from '../builder';

jest.mock('../builder');

DTSBuilder.mockImplementation(() => {
  const mockNext = jest.fn().mockImplementation(() => ({ next: mockNext }));

  return {
    next: mockNext,
    getResult: jest.fn().mockReturnValue('result'),
  };
});

jest.mock('../compilation', () => ({
  enumCompilation: jest.fn(),
  interfaceCompilation: jest.fn(),
  headerCompilation: jest.fn(),
}));

describe('test analyzeStep utils', () => {
  test('test with declarationList', () => {
    const analyze = analyzeStep('libName', ['Test']);
    const componentsList = [{ displayName: 'displayName' }];

    expect(analyze(componentsList).replace(/\s+/g, ' ')).toEqual('/* libName: libName */ import React from "react"; ');
  });

  test('test all components', () => {
    const analyze = analyzeStep('libName', []);
    const componentsList = [{ displayName: 'displayName' }];

    expect(analyze(componentsList).replace(/\s+/g, ' ')).toEqual('/* libName: libName */ import React from "react"; result; ');
  });
});
