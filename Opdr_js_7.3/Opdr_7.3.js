let i = 0;
function knop() {
    i++;
    document.getElementById('h1').innerHTML = i;

    if (i === 10) {
        i = -1
    }
}
