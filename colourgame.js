// alert("connected");
let numsquares = 6;
let colours = [];
let pickedColor;
let squares = document.querySelectorAll(".square");
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message");
//colorDisplay.textContent = pickedColor;
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let easybtn = document.querySelector("#easybtn");
let hardbtn = document.querySelector("#hardbtn");
let modeButtons = document.querySelectorAll(".mode");


init();

function init() {
    setupModeButtons();
    setupSquares();
    reset();
}

function setupModeButtons() {
    for (let i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function () {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numsquares = 3 : numsquares = 6;

            reset();

        });

    }
}

function setupSquares() {
    for (var i = 0; i < squares.length; i++) {
        // ADD colours to squares
        squares[i].style.backgroundColor = colours[i];

        // click listeners

        squares[i].addEventListener("click", function () {
            let clickedColor = this.style.backgroundColor;

            if (clickedColor === pickedColor) {
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

}
function reset() {
    colours = generateRandomColors(numsquares);

    h1.style.backgroundColor = "steelblue";

    messageDisplay.textContent = "";
    // pick new colors from array
    pickedColor = pickColor();
    //change the colors of the squares.
    colorDisplay.textContent = pickedColor;

    resetButton.textContent = "New Colours";
    for (var i = 0; i < squares.length; i++) {

        if (colours[i]) {
            // ADD colours to squares
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colours[i];
        } else {
            squares[i].style.display = "none";
        }
    }
}


resetButton.addEventListener("click", function () {
    reset();
});



function generateRandomColors(num) {
    //make array 
    arr = [];
    // repeat num times
    for (let i = 0; i < num; i++) {
        //get random colours and push to array
        arr.push(randomColor());
    }
    // return the array
    return arr;
}
function randomColor() {
    //pick red from 0-255
    let r = Math.floor(Math.random() * 256);
    //pick grean from 0-255
    let g = Math.floor(Math.random() * 256);
    //pick blue from 0-255
    let b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}
function changeColours(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    let random = Math.floor(Math.random() * colours.length);
    return colours[random];
}


function getPickedColorColors(str) {
    var match = str.match(/rgba?\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3})\)?(?:, ?(\d(?:\.\d?))\))?/);
    return match;
}


    //   console.log(getPickedColorColors(pickedColor)[2]);
