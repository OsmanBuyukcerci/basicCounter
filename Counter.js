
var counter = 0;
var saveCounter = 0;

document.getElementById("lwrBut").onclick = function remove() {
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
    if (saveCounter == 0)
    {
        document.getElementById("li1").innerHTML = counter;
    }
    else if (saveCounter == 1)
    {
        document.getElementById("li2").innerHTML = counter;
    }
    else if (saveCounter == 2)
    {
        document.getElementById("li3").innerHTML = counter;
    }
    else if (saveCounter == 3)
    {
        document.getElementById("li4").innerHTML = counter;
    }
    else
    {
        document.getElementById("li5").innerHTML = counter;
    }
    ++saveCounter;
    if (saveCounter == 5)
    {
        saveCounter = 0;
    }
}

document.getElementById("delBut").onclick = function del() {
    var select = document.getElementById("select").value;
    if (select == 1)
    {
        document.getElementById("li1").innerHTML = '';
    }
    else if (select == 2)
    {
        document.getElementById("li2").innerHTML = '';
    }
    else if (select == 3)
    {
        document.getElementById("li3").innerHTML = '';
    }
    else if (select == 4)
    {
        document.getElementById("li4").innerHTML = '';
    }
    else 
    {
        document.getElementById("li5").innerHTML = '';
    }
    saveCounter -= 1;
}
