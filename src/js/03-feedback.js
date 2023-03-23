import throttle from "lodash.throttle";

const inputInformation = {
    email: '',
    message: '',
}

const refs = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('input'),
    textarea: document.querySelector('.feedback-form textarea')
}

refs.form.addEventListener('input', throttle(onTextareaInput, 500))
refs.form.addEventListener('submit', onFormSubmit)

function onTextareaInput(evt) {
    if (evt.target === refs.input) {
        inputInformation.email = evt.target.value
        const targetValue = JSON.stringify(inputInformation)
        localStorage.setItem("feedback-form-state", targetValue)
    }
    if (evt.target === refs.textarea) {
        inputInformation.message = evt.target.value
        const targetValue = JSON.stringify(inputInformation)
        localStorage.setItem("feedback-form-state", targetValue)
    }
}

inputSavedText()

function onFormSubmit(evt) {
    evt.preventDefault()

    console.log(JSON.parse(localStorage.getItem("feedback-form-state")));
    evt.currentTarget.reset()
    localStorage.removeItem("feedback-form-state")
}
 
function inputSavedText() {
    const savedMessage = localStorage.getItem("feedback-form-state")
    if (savedMessage) {
        const infoObj = JSON.parse(savedMessage)
        refs.input.value = infoObj.email;
        refs.textarea.value = infoObj.massage;
    }
}