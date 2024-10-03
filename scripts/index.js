import { router } from './router/index.js';
import { fibonacciHandler } from './fibonacci/fibonacciHandler.js';
import { sumValuesUpToLimitHandler } from './sumValuesUpToLimit/sumValuesUpToLimitHandler.js';

document.addEventListener('DOMContentLoaded', () => {
  router();
});