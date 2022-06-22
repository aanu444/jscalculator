function calculator(){
    const firstNumber=prompt("Kindly enter your first number");
    const secondNumber=prompt("Kindly enter your second number");
    const operators=prompt("Select either x, /, - or +");
    let numberTypeOne=parseInt(firstNumber); //converts string to number
    let numberTypeTwo=parseInt(secondNumber);

    switch(operators){
        case 'x':
           let multiply= numberTypeOne * numberTypeTwo;
            alert(multiply);
            break;
        case '/':
           let division= numberTypeOne / numberTypeTwo;
            alert(division);
            break;
        case '-':
            let subtraction= numberTypeOne - numberTypeTwo;
            alert(subtraction);
            break;
        case '+':
            let addition= numberTypeOne + numberTypeTwo;
            alert(addition);
            break;
        default:
            alert("No value was selected");
    }
}

calculator();