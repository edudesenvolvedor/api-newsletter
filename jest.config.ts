/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import nextJest from 'next/jest';

/** @type {import('jest').Config} */

const createJestConfig = nextJest({
  dir: './',
});

const config = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
};

module.exports = config;

export default createJestConfig(config);
