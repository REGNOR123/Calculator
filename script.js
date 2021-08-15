
function display(val)
{
 document.getElementById("screen").value += val;
}

function clean()
{
document.getElementById("screen").value = "";
}

function solve()
{
    var inpt = document.getElementById("screen").value;
    var result = eval(inpt);
    document.getElementById("screen").value = result;
}
function back() {
    var value = document.getElementById("screen").value;
    document.getElementById("screen").value = value.substr(0, value.length - 1);
}
