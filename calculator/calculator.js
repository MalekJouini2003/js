let display = document.getElementById("display");
const operators = ['+', '-', '*', '/'];

function appendToDisplay(input){
   let lastChar = display.value.slice(-1);

    // If the input is an operator and the last character in the display is also an operator
    if (operators.includes(input) && operators.includes(lastChar)) {
        // Replace the last operator with the new one
        display.value = display.value.slice(0, -1) + input;
    } else {
        // Otherwise, just append the input
        display.value += input;
    }
}


function clearDisplay(input){
    display.value = ""


}

function calculate(input){
    try{
        display.value = eval(display.value)

    }

    catch{
        display.value = "ERROR"

    }


}



