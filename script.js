const container = document.querySelector(".container");


console.log(container);
let arr = [];

for(let i = 0; i < 16; i++){
    arr[i] = [];
    for(let j = 0; j < 16; j++){
        const div = document.createElement("div");
        div.classList.add("child");
        arr[i][j] = div;
        console.log(arr[i][j]);
    }
}

for(let i = 0; i < 16; i++){
    const rowDiv = document.createElement("div");
    for(let j = 0; j < 16; j++){
        arr[i][j].textContent = j;
        rowDiv.appendChild(arr[i][j]);
        if(j === 15){
            container.appendChild(rowDiv);
        }
    }
}