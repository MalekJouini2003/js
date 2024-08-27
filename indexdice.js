let button = document.getElementById("roll_dice");
let sum = 0


function roll_dice() {
    let numOfDice = document.getElementById("num_dice").value;
    let result2 = document.getElementById("result2");
    let result = document.getElementById("result");
    let diceimages = document.getElementById("diceimages");
    const values =[];
    const images =[];

    for (let i = 0; i<numOfDice; i++){
        let value = Math.floor((Math.random()*6)+1);
        
        sum += value;
        values.push(value);
        images.push(`<img src = "dice_images/${value}.jpg">`);
        
    } 
    console.log(sum);

    result.textContent = `dice ${values.join(", ")} `; 
    diceimages.innerHTML = images.join('');
    result2.textContent = `sum: ${sum}`;

}