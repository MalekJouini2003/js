let random_num = document.getElementById("random_number")

document.getElementById("button").onclick = function(){
    let min = parseInt(document.getElementById("Min").value)
    let max = parseInt(document.getElementById("Max").value)
    let x = (Math.floor(Math.random() * (max-min+1)) +min) ;
    random_num.textContent =x ;
}
