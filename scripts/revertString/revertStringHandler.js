import { revertString } from './revertString.js';
import { showElement } from '../utils/showElement.js';
import { displayResultMessage } from '../utils/displayResultMessage.js';
import { isEmpty } from '../utils/isEmpty.js';

export function containsLetterHandler(){
  const { value } = document.querySelector("#revertStringInput")
  const isFieldEmpty = isEmpty(value)
  const output = document.querySelector('#revertStringOutput')

  if (!isFieldEmpty) {
    const result = revertString(value)
    const message = `${value} = ${result}`
    showElement(output)
    return displayResultMessage(message, output)
  }
  const message = "Palavra não informada"
  showElement(output)
  displayResultMessage(message, output)
}

const revertStringButton = document.getElementById('revertStringButton')
revertStringButton.addEventListener("click", containsLetterHandler)

const  revertStringInput = document.getElementById('revertStringInput')
revertStringInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    containsLetterHandler()
  }
})