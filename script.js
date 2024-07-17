let squares = []; 
let row = [];
const container = document.querySelector("#container");
const reset = document.querySelector("button");

function createBoard(dim) {
    if (squares.length > 0 && row.length > 0) {
        squares.forEach((e) => e.remove());
        row.forEach((e) => e.remove());
        squares = [];
        row = [];
    }

    // Need divs for each row to flex horizontally
    for (let i = 0; i < dim; i++) {
        row[i] = document.createElement("div");
        row[i].classList.add("row");
        container.appendChild(row[i]);
    }

    for (let i = 0; i < (dim ** 2); i++) {
        squares[i] = document.createElement("div");
        squares[i].classList.add("square");

        let index = Math.floor(i / dim); 

        console.log(index);
        row[index].appendChild(squares[i]);
    }

    squares.forEach((e) => {
        e.addEventListener("mouseover", () => {
            e.classList.add("hover");
        })
    })
}

createBoard(16);

reset.addEventListener("click", () => {
    let dim = prompt("Please choose the dimension of the new grid");
    let validDim = false;
    while (!validDim) {
        if (dim > 100 || dim < 1) {
            dim = prompt("Please enter a dimension less than 100 and greater than 1");
        }
        else {
            validDim = true; 
        }
    }
    createBoard(dim);
})

