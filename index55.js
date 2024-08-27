let bot_num= Math.floor(Math.random()*101)
let result = document.getElementById("result")

let button = document.getElementById("submit")
let i = 0;

button.onclick = function(){
    let user_num= parseInt(document.getElementById("numbertext").value);
    
    while(user_num >100 || user_num < 0){
        result.textContent = "please enter a number between 0 and 100"
        break;
    }
    while(user_num != bot_num && user_num <= 100 && user_num >= 0){
        i++;
        if(user_num < bot_num){
            
            result.textContent = `your number is too low, TRY number ${i}`
        }
        else{
            
            result.textContent = `your number is too high, TRY number ${i}`
        }
        break;
    }

    if (user_num == bot_num){
        result.textContent = "you guessed the right number"
    }
}
console.log(bot_num)
