import { router } from './router/index.js'
import { calcMonthlyBillingPercentageHandler } from './calcMonthlyBillingPercentage/calcMonthlyBillingPercentageHandler.js';
import { containsLetterHandler } from './revertString/revertStringHandler.js'
import { fibonacciHandler } from './fibonacci/fibonacciHandler.js'
import { sumValuesUpToLimitHandler } from './sumValuesUpToLimit/sumValuesUpToLimitHandler.js'

document.addEventListener('DOMContentLoaded', () => {
  router()
})