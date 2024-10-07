export function parseItemsToObject(listItems) {
  const revenueData = []
  for (const value of listItems) {
    const [key, val] = value.split('-')
    const obj = {}
    obj.estado = key.trim()
    obj.porcentagem = val.split('R$').join('').trim()
    revenueData.push(obj)
  }
  return revenueData;
}
