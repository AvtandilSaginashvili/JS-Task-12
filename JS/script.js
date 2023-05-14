// დაბეჭდე

function printer1() {
    var a = document.getElementById("inp1").value;
    let text = "";
    var b = 0;

    while (b < a) {

        text +="<br>Hello World" + "" + b;
        b++;
        document.getElementById("paper").innerHTML = text;
        
    }
    document.getElementById("myform3").reset();
}

// გამოაჩინე

var c = document.getElementById("dvp");
var i = document.getElementById("imge");
var h = document.getElementById("happ");

function hide() {

    i.style.visibility = "hidden";
    h.style.visibility = "visible"
    c.style.transition = "5s";
    c.style.visibility = "visible";

}