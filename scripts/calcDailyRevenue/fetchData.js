export async function fetchData() {
  try {
    const response = await fetch('/assets/data/distributorRevenue.json')
    const data = await response.json()
    return data
  } catch (err) {
    console.error('Erro ao ler o arquivo:', err)
  }
}