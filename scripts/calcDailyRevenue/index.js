const { resolve } = require('node:path')
const { readFile } = require('node:fs/promises')

async function fetchData() {
  const filePath = resolve(__dirname, '../../assets/data/distributorRevenue.json')
  
  try {
    const rawData = await readFile(filePath)
    const data = JSON.parse(rawData)
    return data
  } catch (err) {
    console.error('Erro ao ler o arquivo:', err)
  }
}

async function handler(){
  const data = await fetchData()
  const result = calcDailyRevenue(data)
  console.log(result)
}

function calcDailyRevenue(data) {
  const validDays = data.filter(({valor}) => valor > 0)
  const lowestRevenue = validDays.find(({valor}) => valor === Math.min(...validDays.map(({valor}) => valor)))
  const highestRevenue = validDays.find(({valor}) => valor === Math.max(...validDays.map(({valor}) => valor)))
  const averageRevenue = validDays.reduce((acc, {valor}) => acc + valor, 0) / validDays.length
  const daysAboveAverage = validDays.filter(({valor}) => valor > averageRevenue)
  return {
    lowestRevenue,
    highestRevenue,
    daysAboveAverage
  }
}

handler()