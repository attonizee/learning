var resetButton = document.querySelector('#restart');
var tableCells = document.querySelectorAll('td');

function clearBoard(){
    for (var i = 0; i < tableCells.length; i++) {
        tableCells[i].textContent = '';
    }
}

resetButton.addEventListener('click', clearBoard);

function setMarker(){
    if (this.textContent === ''){
        this.textContent = 'X';
    }else if (this.textContent === 'X'){
        this.textContent = '0'
    } else {this.textContent = ''}
}

for (var i = 0; i < tableCells.length; i++){
    tableCells[i].addEventListener('click', setMarker)
}