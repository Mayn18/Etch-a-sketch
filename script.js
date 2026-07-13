const container = document.querySelector(".container");
const gridBtn = document.querySelector("#customGrid");

console.log(container);
let arr = [];

let gridIndex = 16;

function createGrid(girdIndex){
    for(let i = 0; i < girdIndex; i++){
        arr[i] = [];
        for(let j = 0; j < gridIndex; j++){
            const div = document.createElement("div");
            div.classList.add("child");
            arr[i][j] = div;
        }
    }
    
    for(let i = 0; i < gridIndex; i++){
        const rowDiv = document.createElement("div");
        for(let j = 0; j < gridIndex; j++){
            arr[i][j].style.height = "10px";
            arr[i][j].style.width = "10px";
            rowDiv.appendChild(arr[i][j]);
            if(j === gridIndex-1){
                container.appendChild(rowDiv);
            }
        }
    }
    
    for(let i = 0; i < gridIndex; i++){
        for(let j = 0; j < gridIndex; j++){
            arr[i][j].addEventListener("mouseover", () => { 
                arr[i][j].style.backgroundColor = "yellow";
            })
        }
    }
}

function takeUserInput(){
    let temp = Number(prompt("Enter a number less than or equal to 100: ", 16));

    if(!Number.isInteger(temp)){ 
        alert("Enter a number!");
        return takeUserInput();
    }
    
    if(temp > 100){
        alert("Enter a number less than 100");
        return takeUserInput();
    }
    return temp;
}
createGrid(gridIndex);

gridBtn.addEventListener("click", ()=>{
    gridIndex = takeUserInput();
    console.log(gridIndex);
    container.replaceChildren();
    createGrid(gridIndex);
});