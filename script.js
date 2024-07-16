const squares = []; 
const row = [];
const container = document.querySelector("#container");

// Need divs for each row to flex horizontally
for (let i = 0; i < 4; i++) {
    row[i] = document.createElement("div");
    row[i].classList.add("row");
    container.appendChild(row[i]);
}

for (let i = 0; i < 16; i++) {
    squares[i] = document.createElement("div");
    squares[i].textContent = "hi";; 
    squares[i].classList.add("square");

    if (i < 4) {
        row[1].appendChild(squares[i]);
    }
    else if (i < 8) {
        row[2].appendChild(squares[i]);
    }
    else if (i < 12) {
        row[3].appendChild(squares[i]);
    }
    else {
        row[4].appendChild(squares[i]);
    }
}

