export function calcMonthlyRevenuePercentage(data) {
  const revenueData = data
  const total = revenueData.map((item) => Number.parseFloat(item.porcentagem)).reduce((acc, curr) => acc + curr, 0)
  const revenuePercentage = []
  // adicionar ao revenuePercentage o estado e a porcentagem de cada estado em relação ao total
  for (const item of revenueData) {
    revenuePercentage.push({
      estado: item.estado,
      porcentagem: `${((Number.parseFloat(item.porcentagem) / total) * 100).toFixed(2)}%`
    })
  }
  return revenuePercentage;
}
