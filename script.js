function checkAlliteration(){
    var sentence = document.getElementById("alliter"); // a js file to check alliteration
    var char = document.getElementById("char");
    if (!sentence || !char) {
        document.getElementById("result").innerHTML = "ERROR: One or more input fields are missing.";
        return;
    }
    var valid = validateSentence(sentence.value.toLowerCase());
    if (getCount(sentence.value.toLowerCase()) < 3) {
        document.getElementById("result").innerHTML = "Invalid number of words";
    } else if (valid) {
        document.getElementById("result").innerHTML = "Your Score is " + getScore(sentence.value.toLowerCase(), char.value.toLowerCase());
    } else {
        document.getElementById("result").innerHTML = "INVALID SENTENCE";
    }
}
function getCount(str){
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] === " ") {
            count++;
        }
    }
    return count + 1;
}
function validateSentence(str){
    for (var i = 0; i < str.length; i++) {
        if (str[i] === " " && (str[i+1] === "a" || str[i+1] === "e" || str[i+1] === "i" || str[i+1] === "o" || str[i+1] === "u")) {
            return false;
        }
    }
    return true;
}

function getScore(str,char){
    if (char.length > 1) return 0;
    let score = 0;
    let n = 0;
    if (str[0] !== char) return 0;
    else n++;
    for (var i = 0; i < str.length; i++) {
        if (str[i] === " " && str[i+1] === char){
            n++;
            if (n >= 3) score += 2;
        }
    }
    return score;
}
