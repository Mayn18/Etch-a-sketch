const container = document.querySelector(".container");

const gridBtn = document.querySelector("#customGrid");
const randomColor = document.querySelector("#randomColor");
const darkenColor = document.querySelector("#darkenColor");

let [r, g, b] = [0, 0, 0]

let color = `rgb(${r},${g},${b})`;
let mode = 'normal'

console.log(container);
let arr = [];

let gridIndex = 16;

function createGrid(girdIndex) {
    for (let i = 0; i < girdIndex; i++) {
        arr[i] = [];
        for (let j = 0; j < gridIndex; j++) {
            const div = document.createElement("div");
            div.classList.add("child");
            arr[i][j] = div;
        }
    }

    for (let i = 0; i < gridIndex; i++) {
        const rowDiv = document.createElement("div");
        for (let j = 0; j < gridIndex; j++) {
            arr[i][j].style.height = "10px";
            arr[i][j].style.width = "10px";
            rowDiv.appendChild(arr[i][j]);
            if (j === gridIndex - 1) {
                container.appendChild(rowDiv);
            }
        }
    }

    for (let i = 0; i < gridIndex; i++) {
        for (let j = 0; j < gridIndex; j++) {
            arr[i][j].addEventListener("mouseover", () => {
                if (mode === 'normal') {
                    arr[i][j].style.backgroundColor = color;
                }
                else if (mode === 'dark') {
                    let bg = getComputedStyle(arr[i][j]).backgroundColor;
                    let darkColor = makeColorDarker(bg);
                    console.log(darkColor);
                    arr[i][j].style.backgroundColor = darkColor;
                }
            })
        }
    }
}

function takeUserInput() {
    let temp = Number(prompt("Enter a number less than or equal to 100: ", 16));

    if (!Number.isInteger(temp)) {
        alert("Enter a number!");
        return takeUserInput();
    }

    if (temp > 100) {
        alert("Enter a number less than 100");
        return takeUserInput();
    }
    return temp;
}

function randomizeColor() {
    let r = Math.floor(Math.random() * 255) + 1;
    let g = Math.floor(Math.random() * 255) + 1;
    let b = Math.floor(Math.random() * 255) + 1;

    return [r, g, b];
}

function makeColorDarker(bg) {
    if (bg === 'rgb(0,0,0,0)') {
        bg === 'rgb(255,255,255)'
    }
    let [r, g, b] = bg.match(/\d+/g).map(Number);
    r *= 0.9;
    g *= 0.9;
    b *= 0.9;
    console.log(r, g, b);
    return `rgb(${r}, ${g}, ${b})`;
}
createGrid(gridIndex);

gridBtn.addEventListener("click", () => {
    gridIndex = takeUserInput();
    console.log(gridIndex);
    container.replaceChildren();
    createGrid(gridIndex);
});

randomColor.addEventListener("click", () => {
    [r, g, b] = randomizeColor();
    color = `rgb(${r}, ${g}, ${b})`
});

darkenColor.addEventListener("click", () => {
    mode = mode === "normal" ? "dark" : "normal";
});
