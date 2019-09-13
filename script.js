// Scroll Animation If Class = anim
window.sr = ScrollReveal();
sr.reveal('.anim');

// Age Calulator
function calculate_age(dob) {
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms);

    return Math.abs(age_dt.getUTCFullYear() - 1970);
}

document.getElementById('age').innerHTML = (calculate_age(new Date(2005, 9, 28)));
