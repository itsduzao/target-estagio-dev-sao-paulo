export function populateHTMLTable(table, data, thead=false) {
  let rowIndex = thead ? 0 : 1;
  for (const [key, value] of Object.entries(data)) {
    if (rowIndex < table.rows.length) {
      table.rows[rowIndex].cells[0].innerText = key;
      table.rows[rowIndex].cells[1].innerText = value;
      rowIndex++;
    }
  }
  return table;
}
