export function populateHTMLTable(table, data) {
  let rowIndex = 0;
  for (const [key, value] of Object.entries(data)) {
    if (rowIndex < table.rows.length) {
      if (rowIndex === 0) {
        table.rows[rowIndex].cells[0].innerText = 'Estado';
        table.rows[rowIndex].cells[1].innerText = 'Porcentagem';
        rowIndex++;
      }
      table.rows[rowIndex].cells[0].innerText = key;
      table.rows[rowIndex].cells[1].innerText = `${value}%`;
      rowIndex++;
    }
  }
  return table;
}
