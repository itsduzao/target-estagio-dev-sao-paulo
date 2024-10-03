export function calcMonthlyBillingPercentage(){
  const valuesObj = extractListItems()
  const total = Object.values(valuesObj).reduce((acc, curr) => acc + Number.parseFloat(curr), 0)
  const percentageObj = {}
  for (const key in valuesObj) {
    percentageObj[key] = ((Number.parseFloat(valuesObj[key]) / total) * 100).toFixed(2)
  }
  return percentageObj
}

function extractListItems() {
  const calcPercentageList = document.getElementById('calculatePercentageList').children
  const listItems = []
  for (const listItem of calcPercentageList) {
    listItems.push(listItem.innerText)
  }
  const valuesObj = {}
  for (const value of listItems) {
    const [key, val] = value.split('-')
    valuesObj[key.trim()] = val.split('R$').join('').trim()
  }
  return valuesObj
}
