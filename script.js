


var s1 = document.getElementById("phrase");
var str = s1.innerHTML;
var newText = "";
for (var i = 0; i < str.length; i++) {
     if (str[i] == '*') {
     newText+= str.charAt(i).fontcolor("red");
     }
     else {
        newText += str[i];
    }
}
s1.innerHTML = newText;
