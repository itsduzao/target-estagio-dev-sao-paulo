export function sumValuesUpToLimit({limit,count,accumulator}){
  while (count < limit) {
    count++
    accumulator += count
  }

  return accumulator
}