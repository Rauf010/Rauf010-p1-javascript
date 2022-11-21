var telkliks = 0;
function kleuraanpassen()
{
    telkliks++;
    document.getElementById("teller").innerHTML = "aantal keer geklikt: " + telkliks;



    // kleur <p> aanpassen 

    const AllePs = document.getElementsByTagName("p")

    for (let i = 0; i < AllePs.length; i++)
    {
        AllePs[i].style.color = randomGenerator();
    }
}


function randomGenerator() 
{
    const lettersHex = "0123456789ABCDEF";
    var kleur = "#";
    for (var n = 0; n < 6; n++)
    {
        kleur += lettersHex[Math.floor(Math.random()*16) ];
    }
    return kleur;

}
