const squares = []; 
const container = document.querySelector("#container");

for (let i = 0; i < 16; i ++) {
    squares[i] = document.createElement("div");
    squares[i].textContent = "hi";
    container.appendChild(squares[i]); 
    squares[i].classList.add("square");
}