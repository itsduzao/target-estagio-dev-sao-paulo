export function generateHTMLTable({ rows, cols }) {
  const table = document.createElement('table')
  const thead = document.createElement('thead')
  const tbody = document.createElement('tbody')
  for (let i = 0; i < rows; i++) {
    const tr = document.createElement('tr')
    for (let j = 0; j < cols; j++) {
      const th = document.createElement('th')
      const td = document.createElement('td')
      tr.appendChild(i === 0 ? th : td)
    }
    i === 0 ? thead.appendChild(tr) : tbody.appendChild(tr)
  }
  table.appendChild(thead)
  table.appendChild(tbody)
  return table
}