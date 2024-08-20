document.getElementById('startButton').addEventListener('click', function() {
    const seconds = parseInt(document.getElementById('secondsInput').value);

    if (isNaN(seconds) || seconds <= 0) {
        alert("Please enter a valid number of seconds.");
        return;
    }

    setTimeout(function() {
        showPopup();
    }, seconds * 1000);
});

document.getElementById('closeButton').addEventListener('click', function() {
    closePopup();
});

function showPopup() {
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('popup').style.display = 'block';
}

function closePopup() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('popup').style.display = 'none';
}
