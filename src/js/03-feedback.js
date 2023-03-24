import throttle from "lodash.throttle";

 const localhostKey = "feedback-form-state"

const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('.feedback-form textarea'),
    input: document.querySelector('input'),
}

const inputInformation = {
    email: '',
    message: '',
}

refs.form.addEventListener('submit', onFormSubmit)

inputSavedText()

function onFormSubmit(evt) {
    evt.preventDefault()

    console.log(JSON.parse(localStorage.getItem(localhostKey)));
    evt.currentTarget.reset()
    localStorage.removeItem(localhostKey)
}

refs.form.addEventListener('input', throttle(onTextareaInput, 500))

function onTextareaInput(evt) {

    inputInformation[evt.target.name] = evt.target.value

    const targetValue = JSON.stringify(inputInformation)
    localStorage.setItem(localhostKey, targetValue)
}
 
function inputSavedText() {
    const savedMessage = localStorage.getItem(localhostKey)
    if (savedMessage) {
        console.log(savedMessage);
        const infoObj = JSON.parse(savedMessage)
        refs.textarea.value = infoObj.massage || '';
        refs.input.value = infoObj.email || '';
    }
}

console.log(inputInformation);




