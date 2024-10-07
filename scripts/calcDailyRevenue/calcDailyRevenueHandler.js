import { calcDailyRevenue } from './calcDailyRevenue.js';
import { fetchData } from './fetchData.js';

async function handler(){
  const data = await fetchData()
  const {daysAboveAverage, highestRevenue, lowestRevenue} = calcDailyRevenue(data)
}

handler()