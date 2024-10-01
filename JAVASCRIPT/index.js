const operationSelect = document.getElementById('operation');
const inputsDiv = document.getElementById('inputs');

operationSelect.addEventListener('change', function () {
    inputsDiv.style.display = this.value ? 'block' : 'none';
});

function calculate() {

    const firstNumber = parseFloat(document.getElementById('firstNumber').value);
    const secondNumber = parseFloat(document.getElementById('secondNumber').value);

    const operation = operationSelect.value;

    let result;

    if (operation === 'sum') {
        result = firstNumber + secondNumber;
    } else if (operation === 'subtract') {
        result = firstNumber - secondNumber;
    } else if (operation === 'divide') {
        if (secondNumber === 0) {
            result = 'Error: Cannot divide by zero';
        } else {
            result = firstNumber / secondNumber;
        }
    } else if(operation ===  'multiply') {
        result = firstNumber * secondNumber;
    }else {
        result = 'Please select a valid operation';
    }

    document.getElementById('result').innerText = 'Result: ' + result;
}


const comparisonSelect = document.getElementById('comparison');
const inputsComparison = document.getElementById('inputs_c');

comparisonSelect.addEventListener('change', function () {
    inputsComparison.style.display = this.value ? 'block' : 'none';
});

function compare() {

    const firstNumber = parseFloat(document.getElementById('first').value);
    const secondNumber = parseFloat(document.getElementById('second').value);

    console.log(firstNumber, secondNumber)

    const operation = comparisonSelect.value;
    let result;

    switch (operation) {
        case 'equal':
            result = firstNumber === secondNumber;
            break;
        case 'greater':
            result = firstNumber > secondNumber;
            break;
        case 'less':
            result = firstNumber < secondNumber;
            break;
        case 'notEqual':
            result = firstNumber !== secondNumber;
            break;
        case 'greaterEqual':
            result = firstNumber >= secondNumber;
            break;
        case 'lessEqual':
            result = firstNumber <= secondNumber;
            break;
        default:
            result = 'Please select a valid comparison';
            break;
    }

    document.getElementById('resultComparison').innerText = 'Result: ' + result;
}

function evaluateLogic() {

    const logicSelect = document.getElementById('comparison_logic').value;
    
    const a = document.getElementById('valueA').value.toLowerCase() === true;
    const b = document.getElementById('valueB').value.toLowerCase() === false;
    const c = document.getElementById('valueC').value.toLowerCase() === true;
    let result;

    switch (logicSelect) {
        case 'a&&b':
            result = a && b;
            break;
        case 'b&&c':
            result = b && c;
            break;
        case 'a&&c':
            result = a && c;
            break;
        case 'a&&b&&c':
            result = a && b && c;
            break;
        default:
            result = 'Por favor, selecione uma opção válida';
            break;
    }

    document.getElementById('resultComparisonLogic').innerText = 'Resultado: ' + result;
}

function exercice_aula() {

    const from_year = 2024;
    const to_year = 2050;

    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;

    if(age >= 18) {
        result = true
    }else {
        result = false
    }

    // (2050 - 2024) + 20, em 2050 ela terá 46 anos

    const verify = (to_year - from_year ) + parseInt(age);

    console.log(verify)

    // Result
    document.getElementById('resultName').innerText = `Nome: ${name}`
    document.getElementById('resultAge').innerText = `Você é maior de idade? ${result}`
    document.getElementById('resultExercise5').innerText = 'Idade em 2050: ' + verify;
}