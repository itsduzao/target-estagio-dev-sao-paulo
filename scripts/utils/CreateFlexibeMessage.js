  export function createFlexibeMessage(arr){
    if (arr.length === 1) {
      return `${arr[0]} está vazio`
    } 
    if (arr.length === 2) {
      return `${arr[0]} e ${arr[1]} estão vazios`
    } else {
      const lastValue = arr.pop()
      return `${arr.join(', ')} e ${lastValue} estão vazios`
    }
  }