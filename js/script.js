import { Modal } from './modal.js'
import { calcImc, notNumber, displayResultMessage } from './ultis.js'

const form = document.querySelector('form')
const inputWeight = document.querySelector("#weight")
const inputWidth = document.querySelector("#width")
const modalMsg = document.querySelector("#title")
const alertError = document.querySelector(".alert-error")

form.onsubmit = event => {
    event.preventDefault()


    const weight = inputWeight.value
    const width = inputWidth.value

    const result = calcImc(weight, width)

    const weightOrWidthIsNotANumber = notNumber(weight) || notNumber(width)

    if (weightOrWidthIsNotANumber) {
        alertError.classList.add('open')
    } else {
        displayResultMessage(result) 
    }
}

function displayResultMessage(result){
    modalMsg.innerText = `Seu IMC é: ${result}`
    alertError.classList.remove('open')
    Modal.open()
    Modal.close()
}
