/*fancifymytext JavaScript*/

//Alerts
function bigText(){
    alert("Big Text!");
}
function fancyA(){
    alert("Fancy!");
}
function normal(){
    alert("Normal");
}
function mooC(){
    alert("Moo");
}

//Changes
function bigger(){
    bigText();
    var words = document.getElementById("words");
    words.style.fontSize = "24pt";
}

function fancy(){
    var check = document.getElementById("fancy");
    var words = document.getElementById("words");
    if(check.checked){
        fancyA();
        words.style.fontWeight = "bold";
        words.style.color = "blue";
        words.style.textDecoration = "underline blink";
    } else{
        normal();
        words.style.fontWeight = "normal";
        words.style.color = "black";
        words.style.textDecoration = "none";
    }
}

function moo(){
    mooC();
    var words = document.getElementById("words");
    var per = words.value.split(".");
    words.value = per.join("-Moo.");
}