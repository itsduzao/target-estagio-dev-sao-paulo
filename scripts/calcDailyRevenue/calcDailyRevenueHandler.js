import { calcDailyRevenue } from './calcDailyRevenue.js';
import { fetchData } from './fetchData.js';
import { showElement } from '../utils/showElement.js';
import { generateHTMLTable } from '../utils/generateHTMLTable.js';
import { populateHTMLTable } from '../utils/populateHTMLTable.js';

export async function calcDailyRevenueHandler() {
  const output = document.querySelector('#calculateDailyRevenueOutput')
  const data = await fetchData()
  const { daysAboveAverage, highestRevenue, lowestRevenue } = calcDailyRevenue(data)
  if (!output.hasChildNodes()) {
    let highestRevenueTable = generateHTMLTable({ rows: 2, cols: Object.keys(highestRevenue).length })
    highestRevenueTable.rows[0].cells[0].innerText = 'Dia'
    highestRevenueTable.rows[0].cells[1].innerText = 'Receita'
    highestRevenueTable.insertAdjacentHTML('afterbegin', '<caption>Dia com maior receita</caption>')
    highestRevenueTable.classList.add('table')
    highestRevenueTable = populateHTMLTable(highestRevenueTable, highestRevenue)


    output.appendChild(highestRevenueTable)
  }
  showElement(output)
}

const calculateDailyRevenueButton = document.querySelector('#calculateDailyRevenueButton')
calculateDailyRevenueButton.addEventListener('click', calcDailyRevenueHandler)