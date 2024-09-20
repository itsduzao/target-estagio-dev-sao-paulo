import { containsLetter } from './containsLetter.js';
import { showElement } from '../utils/showElement.js';
import { displayResultMessage } from '../utils/displayResultMessage.js';
import { isEmpty } from '../utils/isEmpty.js';

export function containsLetterHandler(){
  const { value } = document.querySelector("#containsLetterInput")
  const isFieldEmpty = isEmpty(value)
  const output = document.querySelector('#containsLetterOutput')

  if (!isFieldEmpty) {
    const result = containsLetter(value)
    const message = result > 0 ? `${value} contém ${result} letras A.` 
    : `${value} não contém nenhuma letra A.`
    showElement(output)
    return displayResultMessage(message, output)
  }
  const message = "Palavra não informada"
  showElement(output)
  displayResultMessage(message, output)
}

const containsLetterButton = document.getElementById('containsLetterButton')
containsLetterButton.addEventListener("click", containsLetterHandler)