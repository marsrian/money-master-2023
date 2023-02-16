function getInputFieldValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseInt(inputFieldValueString);
    return inputFieldValue;
}

function getTextElementById(elementId){
    const textElement = document.getElementById(elementId);
    const textElementValueString = textElement.innerText;
    const textElementValue = parseInt(textElementValueString);
    return textElementValue;
}

function setTextElementById(elementId, newValue){
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}