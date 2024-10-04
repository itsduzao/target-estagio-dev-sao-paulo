import { calcMonthlyBillingPercentage } from "./calcMonthlyBillingPercentage.js"
import { extractListItemsFromHTMLList } from './extractListItemsFromHTMLList.js';
import { parseItemsToObject } from './parseItemsToObject.js';
import { generateHTMLTable } from './generateHTMLTable.js';
import { populateHTMLTable } from "./populateHTMLTable.js";
import { showElement } from '../utils/showElement.js';

export function calcMonthlyBillingPercentageHandler() {
  const percentageListHTMLElement = document.getElementById('calculatePercentageList')
  const listItems = extractListItemsFromHTMLList(percentageListHTMLElement)
  const billingData = parseItemsToObject(listItems)
  const billingPercentage = calcMonthlyBillingPercentage(billingData)
  const table = generateHTMLTable({ rows: 6, cols: 2 })
  const populatedTable = populateHTMLTable(table, billingPercentage)
  populatedTable.classList.add('table')

  const output = document.querySelector('#calculatePercentageOutput')

  if (!output.hasChildNodes()) {
    output.appendChild(populatedTable)
  }

  showElement(output)
}

const calculatePercentageButton = document.getElementById('calculatePercentageButton')
calculatePercentageButton.addEventListener("click", calcMonthlyBillingPercentageHandler)