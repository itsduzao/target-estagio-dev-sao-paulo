export function populateHTMLTable(table, data) {
  let rowIndex = 0

  data.map((item) => { 
    if (rowIndex === 0) {
      table.rows[rowIndex].cells[0].innerText = Object.keys(item)[0].charAt(0).toUpperCase() + Object.keys(item)[0].slice(1)
      table.rows[rowIndex].cells[1].innerText = Object.keys(item)[1].charAt(0).toUpperCase() + Object.keys(item)[1].slice(1)
    }
    table.rows[rowIndex + 1].cells[0].innerText = item[Object.keys(item)[0]]
    table.rows[rowIndex + 1].cells[1].innerText = item[Object.keys(item)[1]]  
  rowIndex++
  })

  return table;
}
