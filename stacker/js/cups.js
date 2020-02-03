
let lines = {
    one: document.getElementById("line-1"),
    two: document.getElementById("line-2"),
    three: document.getElementById("line-3"),
    four: document.getElementById("line-4"),
    five: document.getElementById("line-5")
}

let logObj = document.getElementById("log");
let p = 0;
let steps = [
    {line: lines.one, position: 3},
    {line: lines.one, position: 2},
    {line: lines.one, position: 4},
    {line: lines.two, position: 3},
    {line: lines.two, position: 2},
    {line: lines.two, position: 4},
    {line: lines.three, position: 2},
    {line: lines.three, position: 3},
    {line: lines.four, position: 3},
    {line: lines.five, position: 3}
];

function placeCup(line, position) { line.innerHTML = replaceChar(line.innerHTML, "O", position); }
function removeCup(line, position) { line.innerHTML = replaceChar(line.innerHTML, "|", position); }
function replaceChar(input, changes, index) { return input.substr(0, index) + changes + input.substr(index + changes.length, input.length); }
function log(message) { logObj.innerHTML += `${message}<br />`; } 
function next() {
    if(p >= 10) {
        log("All cups are already placed!");
    } else {
        placeCup(steps[p].line, steps[p].position);
        log(`Place a cup on line ${steps[p].line.id.substr(5)} at position ${steps[p].position}.`)
        p++;
    }
}