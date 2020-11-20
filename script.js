var line = document.getElementById("line");
line.classList.add("widen");

var button = document.getElementById('resumeDownload');
button.addEventListener('click', check);

function check() {
    button.innerHTML = "✔️";
    button.classList.add("button2active");
    setTimeout(unCheck, 3000);
}

function unCheck() {
    button.classList.remove("button2active");
    button.innerHTML = "Résumé";
}