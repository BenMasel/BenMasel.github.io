// On js load animate the line
var line = document.getElementById("line");
line.classList.add("widen");

// var button = document.getElementById("resumeDownload");
// button.addEventListener("click", check);

// function check() {
//   button.innerHTML = "✔️";
//   button.classList.add("button2active");
//   setTimeout(unCheck, 3000);
// }

// function unCheck() {
//   button.classList.remove("button2active");
//   button.innerHTML = "Résumé";
// }

// Age Calculator
function calculate_age(dob) {
  var diff_ms = Date.now() - dob.getTime();
  var age_dt = new Date(diff_ms);

  return Math.abs(age_dt.getUTCFullYear() - 1970);
}

// Sends age to the id of 'age'
document.getElementById("age").innerHTML = calculate_age(new Date(2005, 9, 28));

// Change Color On Scroll
window.onscroll = function () {
  changeColor();
};

function changeColor() {
  if (
    document.body.scrollTop > 1950 ||
    document.documentElement.scrollTop > 1950
  ) {
    document.documentElement.style.setProperty("--color", "#F9A826");
    console.log("yellow");
    document.getElementById("webdev").src = "img/webdev3.svg";
  } else if (
    document.body.scrollTop > 1300 ||
    document.documentElement.scrollTop > 1300
  ) {
    document.documentElement.style.setProperty("--color", "#FE5353");
    console.log("reddish");
    document.getElementById("projectsImage").src = "img/projects2.svg";
    document.getElementById("webdev").src = "img/webdev2.svg";
  } else if (
    document.body.scrollTop > 650 ||
    document.documentElement.scrollTop > 650
  ) {
    document.documentElement.style.setProperty("--color", "#536DFE");
    console.log("blue");
    document.getElementById("webdev").src = "img/webdev3.svg";
    document.getElementById("projectsImage").src = "img/projects.svg";
  } else {
    document.documentElement.style.setProperty("--color", "#6c63ff");
    console.log("purple");
    document.getElementById("webdev").src = "img/webdev.svg";
  }
}

function unavailable() {
  alert("Sorry, I'm unavailable right now :/");
}
