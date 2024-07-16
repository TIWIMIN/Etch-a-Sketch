const squares = []; 
const row = [];
const container = document.querySelector("#container");

// Need divs for each row to flex horizontally
for (let i = 0; i < 16; i++) {
    row[i] = document.createElement("div");
    row[i].classList.add("row");
    container.appendChild(row[i]);
}

for (let i = 0; i < 256; i++) {
    squares[i] = document.createElement("div");
    squares[i].textContent = i; 
    squares[i].classList.add("square");

    let index = Math.floor(i / 16); 

    console.log(index);
    row[index].appendChild(squares[i]);
}

