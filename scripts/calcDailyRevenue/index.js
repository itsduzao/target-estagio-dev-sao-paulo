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
  calcDailyRevenue(data)
}

function calcDailyRevenue(data) {
  const validDays = data.filter(({valor}) => valor > 0)
  console.log(validDays)
}

handler()