const container = document.getElementById('container');
const selection = document.getElementById('gridSize');
const colorSelection = document.getElementById('colorSelect');
let color = colorSelection.value;
container.addEventListener('mouseover', (e) => changeGrid(e));
selection.addEventListener('change', () => addGrids(selection.value));
colorSelection.addEventListener('change', () => color = colorSelection.value);

function addGrids(numOfGrids){
    container.textContent = '';
    for(i=1;i<=numOfGrids;i++){
        let newDiv = document.createElement('div');
        newDiv.className = 'gridSquare';
        if(numOfGrids == 16){
            newDiv.style.height = "25%";
            newDiv.style.width = "25%";
        } else if (numOfGrids == 36){
            newDiv.style.height = "16.66%";
            newDiv.style.width = "16.66%";
        } else if (numOfGrids == 64){
            newDiv.style.height = "12.5%";
            newDiv.style.width = "12.5%";
        } else if (numOfGrids == 400){
            newDiv.style.height = "5%";
            newDiv.style.width = "5%";
        }
        container.appendChild(newDiv);
    }
}

function changeGrid(e){
    if(e.target.className == "gridSquare"){
        e.target.style.background = `${color}`;
    }
}