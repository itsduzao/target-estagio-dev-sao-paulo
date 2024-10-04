export function parseItemsToObject(listItems) {
  const billingData = {};
  for (const value of listItems) {
    const [key, val] = value.split('-');
    billingData[key.trim()] = val.split('R$').join('').trim();
  }
  return billingData;
}
