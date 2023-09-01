function kilo() {
    document.getElementById('g').innerHTML =
        (document.getElementById('grams').value/1000 + " kg");
}

function pounds() {
    document.getElementById('k1').innerHTML =
        (document.getElementById('kilograms').value*2.2046 + " (£)");
}