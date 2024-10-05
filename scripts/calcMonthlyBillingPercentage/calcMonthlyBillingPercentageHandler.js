import { calcMonthlyRevenuePercentage } from "./calcMonthlyRevenuePercentage.js"
import { extractListItemsFromHTMLList } from './extractListItemsFromHTMLList.js';
import { parseItemsToObject } from './parseItemsToObject.js';
import { generateHTMLTable } from '../utils/generateHTMLTable.js';
import { populateHTMLTable } from "./populateHTMLTable.js";
import { showElement } from '../utils/showElement.js';

export function calcMonthlyRevenuePercentageHandler() {
  const percentageListHTMLElement = document.getElementById('calculatePercentageList')
  const listItems = extractListItemsFromHTMLList(percentageListHTMLElement)
  const RevenueData = parseItemsToObject(listItems)
  const RevenuePercentage = calcMonthlyRevenuePercentage(RevenueData)
  const table = generateHTMLTable({ rows: 6, cols: 2 })
  const populatedTable = populateHTMLTable(table, RevenuePercentage)
  populatedTable.classList.add('table')

  const output = document.querySelector('#calculatePercentageOutput')

  if (!output.hasChildNodes()) {
    output.appendChild(populatedTable)
  }

  showElement(output)
}

const calculatePercentageButton = document.getElementById('calculatePercentageButton')
calculatePercentageButton.addEventListener("click", calcMonthlyRevenuePercentageHandler)