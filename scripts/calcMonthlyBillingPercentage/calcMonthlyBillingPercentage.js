export function calcMonthlyBillingPercentage(data) {
  const billingData = data;
  const total = Object.values(billingData).reduce((acc, curr) => acc + Number.parseFloat(curr), 0);
  const billingPercentage = {};
  for (const key in billingData) {
    billingPercentage[key] = ((Number.parseFloat(billingData[key]) / total) * 100).toFixed(2);
  }
  return billingPercentage;
}
