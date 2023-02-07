
var counter = 0;

if (document.getElementById("counterSetting"))

document.getElementById("rmvBut").onclick = function remove() {
    document.getElementById("counter").innerHTML = counter - parseFloat(document.getElementById("counterSetting").value);
    counter = counter - parseFloat(document.getElementById("counterSetting").value);
}

document.getElementById("addBut").onclick = function add() {
    document.getElementById("counter").innerHTML = counter + parseFloat(document.getElementById("counterSetting").value);
    counter = counter + parseFloat(document.getElementById("counterSetting").value);
}

document.getElementById("resBut").onclick = function res() {
    document.getElementById("counter").innerHTML = 0;
    counter = 0;
}

document.getElementById("sveBut").onclick = function save() {
    document.getElementById("sveOutput").innerHTML = "Saved Number: "+counter;
}