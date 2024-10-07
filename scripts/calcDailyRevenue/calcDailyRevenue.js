export function calcDailyRevenue(data) {
  const validDays = data.filter(({ valor }) => valor > 0);
  const lowestRevenue = validDays.find(({ valor }) => valor === Math.min(...validDays.map(({ valor }) => valor)));
  const highestRevenue = validDays.find(({ valor }) => valor === Math.max(...validDays.map(({ valor }) => valor)));
  const averageRevenue = validDays.reduce((acc, { valor }) => acc + valor, 0) / validDays.length;
  const daysAboveAverage = validDays.filter(({ valor }) => valor > averageRevenue);
  return {
    lowestRevenue,
    highestRevenue,
    daysAboveAverage
  };
}
