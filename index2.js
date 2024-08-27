let num = 0;
let text = document.getElementById("number");

document.getElementById("left").onclick = function(){
    num--;
    text.textContent = num;

}
document.getElementById("midle").onclick = function(){
    num = 0;
    text.textContent = num;
}
document.getElementById("right").onclick = function(){
    num++;
    text.textContent = num;
}