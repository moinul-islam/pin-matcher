function numberShow(x) {
    var pickInput = document.getElementById("showNumber");

    pickInput.value = pickInput.value + x;


}

document.getElementById("generatePin").addEventListener("click", function () {
    var randomNumber = Math.floor(Math.random() * 9000 + 1000);
    var fourDigit = document.getElementById("randomNumber");
    fourDigit.value = randomNumber;

});

document.getElementById("submitBtn").addEventListener("click", function () {

    let fourDigitsNum = document.getElementById("randomNumber");
    let showCalDisplay = document.getElementById("showNumber");

    if (fourDigitsNum.value == showCalDisplay.value) {

        document.getElementById("pin-matched").style.display = 'block';
        document.getElementById("wrong-pin").style.display = 'none';

    } else {
        document.getElementById("wrong-pin").style.display = 'block';

        document.getElementById("pin-matched").style.display = 'none';
    }
})