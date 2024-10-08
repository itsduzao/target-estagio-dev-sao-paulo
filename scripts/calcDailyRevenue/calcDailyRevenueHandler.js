import { calcDailyRevenue } from './calcDailyRevenue.js';
import { fetchData } from './fetchData.js';
import { showElement } from '../utils/showElement.js';
import { generateHTMLTable } from '../utils/generateHTMLTable.js';
import { populateHTMLTable } from '../utils/populateHTMLTable.js';

export async function calcDailyRevenueHandler() {
  const output = document.querySelector('#calculateDailyRevenueOutput')
  const data = await fetchData()
  if (!output.hasChildNodes()) {
    const { daysAboveAverage, highestRevenue, lowestRevenue } = calcDailyRevenue(data)
    let highestRevenueTable = generateHTMLTable({ rows: ([highestRevenue].length + 1), cols: Object.keys(highestRevenue).length })
    highestRevenueTable.insertAdjacentHTML('afterbegin', '<caption>Dia com maior receita</caption>')
    highestRevenueTable.classList.add('table')
    highestRevenueTable = populateHTMLTable(highestRevenueTable, [highestRevenue])

    let lowestRevenueTable = generateHTMLTable({ rows: ([lowestRevenue].length + 1), cols: Object.keys(lowestRevenue).length })
    lowestRevenueTable.insertAdjacentHTML('afterbegin', '<caption>Dia com menor receita</caption>')
    lowestRevenueTable.classList.add('table')
    lowestRevenueTable = populateHTMLTable(lowestRevenueTable, [lowestRevenue])

    let daysAboveAverageTable = generateHTMLTable({ rows: (daysAboveAverage.length + 1), cols: Object.keys(daysAboveAverage[0]).length })
    daysAboveAverageTable.insertAdjacentHTML('afterbegin', '<caption>Dias com receita acima da média</caption>')
    daysAboveAverageTable.classList.add('table')
    daysAboveAverageTable = populateHTMLTable(daysAboveAverageTable, daysAboveAverage)

    output.appendChild(highestRevenueTable)
    output.appendChild(lowestRevenueTable)
    output.appendChild(daysAboveAverageTable)
  }
  showElement(output)
}

const calculateDailyRevenueButton = document.querySelector('#calculateDailyRevenueButton')
calculateDailyRevenueButton.addEventListener('click', calcDailyRevenueHandler)