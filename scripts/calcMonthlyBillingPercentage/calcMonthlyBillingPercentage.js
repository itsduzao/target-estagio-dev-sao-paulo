export function calcMonthlyRevenuePercentage(data) {
  const RevenueData = data;
  const total = Object.values(RevenueData).reduce((acc, curr) => acc + Number.parseFloat(curr), 0);
  const RevenuePercentage = {};
  for (const key in RevenueData) {
    RevenuePercentage[key] = ((Number.parseFloat(RevenueData[key]) / total) * 100).toFixed(2);
  }
  return RevenuePercentage;
}
