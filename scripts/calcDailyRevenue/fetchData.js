export async function fetchData() {
  try {
    const response = await fetch('/target-estagio-dev-sao-paulo/assets/data/distributorRevenue.json', {
      headers: {
        "Content-Type": "application/json",
      }})
    const data = await response.json()
    return data
  } catch (err) {
    console.error('Erro ao ler o arquivo:', err)
  }
}