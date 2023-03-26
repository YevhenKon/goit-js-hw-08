import throttle from "lodash.throttle";

 const localhostKey = "feedback-form-state"

const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('.feedback-form textarea'),
    input: document.querySelector('input'),
}

let inputInformation = {
    email: '',
    message: '',
}

refs.form.addEventListener('submit', onFormSubmit)
refs.form.addEventListener('input', throttle(onTextareaInput, 500))

inputSavedText()

function onFormSubmit(evt) {
    evt.preventDefault()

    console.log(JSON.parse(localStorage.getItem(localhostKey)));
    evt.currentTarget.reset()
    localStorage.removeItem(localhostKey)
}



function onTextareaInput(evt) {
    inputInformation[evt.target.name] = evt.target.value
    localStorage.setItem(localhostKey, JSON.stringify(inputInformation))
}
 
function inputSavedText() {
    const savedMessage = localStorage.getItem(localhostKey)
    if (savedMessage) {
        console.log(savedMessage);
        inputInformation = JSON.parse(localStorage.getItem(localhostKey))
        refs.textarea.value = inputInformation.message || '';
        refs.input.value = inputInformation.email || '';
    }
}

console.log(inputInformation);




