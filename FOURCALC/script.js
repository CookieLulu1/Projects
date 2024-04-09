displayed = "";
buffer = "";
const display = document.getElementById("display");
function displayThis(input){
    document.getElementById('displayInput').innerHTML += input;
    buffer = document.getElementById('displayInput').innerHTML;
}

function clear1(){
    document.getElementById('displayInput').innerHTML = "";
    buffer = "";
}

function calculate() {
    
        document.getElementById('displayInput').innerHTML = eval(buffer);
}

function backspace() {

}

function undo() {

}

