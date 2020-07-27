// alert("connected");

let colours = generateRandomColors(6);
let squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message");
 colorDisplay.textContent = pickedColor;
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");

resetButton.addEventListener("click" , function(){
    //generate all new colours
    colours = generateRandomColors(6);
    console.log(colours);
    h1.style.backgroundColor = "steelblue";

    messageDisplay.textContent = "";
    // pick new colors from array
    pickedColor = pickColor();
    //change the colors of the squares.
    colorDisplay.textContent = pickedColor;
    
    this.textContent = "New Colours";
    for (var i = 0; i < squares.length; i++) {
        // ADD colours to squares
        squares[i].style.backgroundColor = colours[i];
    }
});

for (var i = 0; i < squares.length; i++) {
    // ADD colours to squares
    squares[i].style.backgroundColor = colours[i];
    
    // click listeners

    squares[i].addEventListener("click", function() {
       let clickedColor = this.style.backgroundColor;

       if(clickedColor === pickedColor){
        changeColours(clickedColor);
        messageDisplay.textContent = "Correct!";
        h1.style.backgroundColor = clickedColor;

        resetButton.textContent = "Try Again?";

       }
       else {
           this.style.backgroundColor = "#232323";
           messageDisplay.textContent = "Try Again";
       }
    });

}

function generateRandomColors (num) {
    //make array 
    arr = [];
    // repeat num times
    for (let i = 0; i < num; i++){
        //get random colours and push to array
        arr.push(randomColor());
    }
    // return the array
    return arr;
}
 function randomColor(){
     //pick red from 0-255
     let r = Math.floor(Math.random() * 256);
     //pick grean from 0-255
     let g = Math.floor(Math.random() * 256);
     //pick blue from 0-255
     let b = Math.floor(Math.random() * 256);

     return "rgb(" + r + ", " + g + ", " + b + ")";
 }
function changeColours(color) {
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickColor () {
    let random = Math.floor(Math.random() * colours.length);
        return colours[random];
}



let untidyRoom = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];

 untidyRoom.sort(function(a, b){
    return (a - b);
   
});

document.write(untidyRoom);