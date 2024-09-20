import { fibonacciSequenceGenerator } from './fibonacciSequenceGenerator.js';
import { isInFibonacci } from './isInFibonacci.js';
import { displayResultMessage } from '../utils/displayResultMessage.js';
import { showElement } from '../utils/showElement.js';
import { isEmpty } from '../utils/isEmpty.js';

export function fibonacciHandler(){
  const { value } = document.querySelector("#fibonacciInput")
  const isFieldEmpty = isEmpty(value)
  const fibonacciOutput = document.querySelector('#fibonacciOutput')

  if (!isFieldEmpty) {
    const fibonacciInput = Number(value)
    const fibonacciSequence = fibonacciSequenceGenerator(fibonacciInput)
    const result = isInFibonacci(fibonacciSequence, fibonacciInput)
    const message = result ? `O número ${fibonacciInput} faz parte da sequência` : `O número ${fibonacciInput} não faz parte da sequência`
    showElement(fibonacciOutput)
    return displayResultMessage(message, fibonacciOutput)
  }
  
  const message = "Número não informado"
  showElement(fibonacciOutput)
  displayResultMessage(message, fibonacciOutput)
}

const fibonacciButton = document.getElementById('fibonacciButton')
fibonacciButton.addEventListener("click", fibonacciHandler)

