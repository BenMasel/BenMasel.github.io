document.getElementById("sideNavOpen").addEventListener("click", sideNavOpen);
document.getElementById("sideNavClose").addEventListener("click", sideNavClose);

function sideNavOpen() {
  document.getElementById("sideNav").style.width = "250px";
}


function sideNavClose() {
  document.getElementById("sideNav").style.width = "0px";
}

function getAge(d1, d2){
    d2 = d2 || new Date();
    var diff = d2.getTime() - d1.getTime();
    return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
}
console.log(getAge(new Date(2005, 9, 28)));
document.getElementById("myAge").innerHTML = "I am a " + getAge(new Date(2005, 9, 28)) + " year old guy who loves programming, gaming and anything to do with computers!";
