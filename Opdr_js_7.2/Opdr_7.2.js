function geld() { 
    let aantal= prompt ("Heb jij genoeg geld?");
    let budget = 100;


    if ( budget > aantal ) {
        document.getElementById("h1").innerHTML = "Helaas, te weinig geld";
        document.getElementById("h1").style.color = "red";
    }
    else {
        document.getElementById("h1").innerHTML = "U heeft genoeg geld!";
        document.getElementById("h1").style.color = "green";
    }
}