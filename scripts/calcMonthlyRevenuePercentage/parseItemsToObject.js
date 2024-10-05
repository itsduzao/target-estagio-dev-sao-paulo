export function parseItemsToObject(listItems) {
  const RevenueData = {};
  for (const value of listItems) {
    const [key, val] = value.split('-');
    RevenueData[key.trim()] = val.split('R$').join('').trim();
  }
  return RevenueData;
}
