function getBigger(){
    //alert("Hello, world!");
    document.getElementById("input-text").style.fontSize = "24pt";
}

function mooText(){
    //alert("testing");
    var inputData = document.getElementById("input-text").value;
    inputData = inputData.toUpperCase();
    //document.getElementById("input-text").style.textTransform = "uppercase";
    var parts = inputData.split(".");
    for (var i = 0; i < parts.length - 1; i++){
        let word = parts[i].trim();
        word += "-Moo.";
        parts[i] = word;
    }
    inputData = parts.join(" ");
    
    document.getElementById("input-text").value = inputData;
}

function changeRadioButton(){
    //alert("working");
    if (document.getElementById("FancyShmancy").checked){
        document.getElementById("input-text").style.fontWeight = "bold";
        document.getElementById("input-text").style.color = "blue";
        document.getElementById("input-text").style.textDecoration = "underline";
    }
    if (document.getElementById("BoringBetty").checked){
        document.getElementById("input-text").style.fontWeight = "normal";
        document.getElementById("input-text").style.color = "black";
        document.getElementById("input-text").style.textDecoration = "none";
    }
}

