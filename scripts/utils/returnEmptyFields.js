export function returnEmptyFields(arr) {
  const filteredEmptyElements = arr.filter(element => {
    const { value } = element
    return value.trim() === ''
  })
  const emptyFields = filteredEmptyElements.map(element => element.name)
  return emptyFields
  }
