export function extractListItemsFromHTMLList(listHTMLElement) {
  const listItems = [];
  for (const listItem of listHTMLElement.children) {
    listItems.push(listItem.innerText);
  }
  return listItems;
}
