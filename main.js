let container = document.querySelector(".container");
const squareInput = document.querySelector("#input-square");
const blackButton = document.querySelector(".black")
const eraserButton = document.querySelector(".eraser")
const randomButton = document.querySelector(".random")
let createGridButton = document.querySelector(".prep-square");
const colorMode= document.querySelector(".color-mode");
const drawingMode = document.querySelector(".drawing-mode");
const resetButton = document.querySelector(".reset")
let errorMessage = document.querySelector(".error-message");
let hoverEnabled = false;
let currentColor = null;
let drawingModeStatus = false;


//Create the gird of squares//
function createDiv(number){
    container.innerHTML = "";
    const squareSize = 500/number;
    for(let i =0; i < number; i++){
        for (let j = 0; j<number; j++){
            //Create square grids//
            newDiv = document.createElement("div");
            newDiv.classList.add("square");
            newDiv.style.width = `${squareSize}px`;
            newDiv.style.height = `${squareSize}px`;
            newDiv.style.backgroundColor = "red";
            container.appendChild(newDiv);
        }
    }
}


//random color helper functon//

function generateRandomInteger(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Manage Colors//

function changeColor(event){
    if(currentColor == "black"){
        event.target.style.backgroundColor = "black";

    } else if (currentColor == "eraser"){
        event.target.style.backgroundColor = "red";
        colorMode.innerHTML = `Color : ${currentColor}`
    } else if (currentColor == "random"){
        const r = generateRandomInteger(0, 255);
        const g = generateRandomInteger(0, 255);
        const b = generateRandomInteger(0, 255);
        event.target.style.backgroundColor = `rgb(${[r,g,b].join(',')})`;
    }
}

blackButton.addEventListener("click", ()=>{
    currentColor = "black"
    colorMode.innerHTML = "";
    colorMode.innerHTML = `Color : ${currentColor}`
})

eraserButton.addEventListener("click", ()=>{
    currentColor = "eraser"
    colorMode.innerHTML = "";
    colorMode.innerHTML = `Color : ${currentColor}`
})


randomButton.addEventListener("click", ()=>{
    currentColor = "random"
    colorMode.innerHTML = "";
    colorMode.innerHTML = `Color : ${currentColor}`
})


//toggle drawing on and off the sketch pad//

function toggleHover(){
    const squareDivs = document.querySelectorAll(".square")
        if(hoverEnabled){
            squareDivs.forEach((squareDiv)=> {
                squareDiv.removeEventListener("mouseover", changeColor)});
            hoverEnabled = false;
        } else{
            squareDivs.forEach((squareDiv) => {
                squareDiv.addEventListener("mouseover", changeColor)});
            hoverEnabled = true;
        }

    }

function checkDrawingMode(){

    if (drawingModeStatus){
        drawingMode.innerHTML = "Drawing Mode : ON";
    } else{
        drawingMode.innerHTML = "Drawing Mode : OFF";
        
    }
}



container.addEventListener("click" , ()=>{
    if (container.children.length > 0){
        drawingModeStatus = !drawingModeStatus;
        checkDrawingMode();
        toggleHover();
    } 
});

//create grid dynamically with the create grid button//
createGridButton.addEventListener("click" , (event)=>{
    event.preventDefault();
    if(squareInput.value <=0 || squareInput.value>=100){
        container.innerHTML = ""
        errorMessage.innerHTML = "Input a valid grid size";

    }else{
        event.preventDefault();
        errorMessage.innerHTML = "";
        createDiv(squareInput.value);
    }

})

//Reset Button//

resetButton.addEventListener("click" , ()=>{
    const squareDivs = document.querySelectorAll(".square")
    squareDivs.forEach((squareDiv)=>{
        squareDiv.style.backgroundColor = 'red';
    })
})





