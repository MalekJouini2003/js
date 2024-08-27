const Mycheckbox = document.getElementById('Mycheckbox');
const visabtn = document.getElementById('visabtn');
const MasterCardbtn = document.getElementById('MasterCardbtn');
const PayPalbtn = document.getElementById('PayPalbtn');
const subresult = document.getElementById('subresult');
const cardresult = document.getElementById('cardresult');

let mybutton = document.getElementById('mybutton');

mybutton.onclick = function(){

    if(Mycheckbox.checked){
        subresult.textContent = "you are subscribed";
    }
        else{
        subresult.textContent = "you are not subscribed";
    }

    if(visabtn.checked){
        cardresult.textContent = "you are paying with Visa";
    }
    else if (MasterCardbtn.checked){
        cardresult.textContent = "you are paying with MasterCard";

    }
    else if(PayPalbtn.checked){
        cardresult.textContent = "you are paying with PayPal";
    }
    else{
        cardresult.textContent = "you have not selected a payment method";
    }
    
}



