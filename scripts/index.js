import { router } from './router/index.js'
import { calcMonthlyRevenuePercentageHandler } from './calcMonthlyRevenuePercentage/calcMonthlyRevenuePercentageHandler.js';
import { containsLetterHandler } from './revertString/revertStringHandler.js'
import { fibonacciHandler } from './fibonacci/fibonacciHandler.js'
import { sumValuesUpToLimitHandler } from './sumValuesUpToLimit/sumValuesUpToLimitHandler.js'

document.addEventListener('DOMContentLoaded', () => {
  router()
})