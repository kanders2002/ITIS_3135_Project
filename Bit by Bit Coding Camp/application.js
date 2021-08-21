/*Here I have set up the code which will allow you to, once you have clicked the submit button, it gets the submit HTML and sends
the user to submit.html which confirms the camp registration.*/

function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        document.getElementById("submit").innerHTML = this.responsiveText;
    xhttp.open("GET", "submit.html");
    xhttp.send();
    }
}