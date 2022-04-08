/* Functions onChange and onBlur fix the issue of the label text and user's text input 
    being on top of each other when the input field loses focus. 
*/
// Variables
const input = document.getElementById(`search`);

// This deals with the case when the user reloads the page when text input has been added.
if (input.value == ``) {
    input.classList.remove(`inputChanged`);
} else {
    input.className = `inputChanged`; 
}

/* "The onchange attribute fires the moment when the value of the element is changed. 
    Onchange occurs when the element loses focus."
*/
const onChange = () => {
    input.className = `inputChanged`;
}

const onBlur = () => {
    // if onBlur + no input => remove class
    if (input.value == ``) {
        input.classList.remove(`inputChanged`);
    }
}