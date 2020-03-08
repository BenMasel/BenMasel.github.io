// Scroll Animation If Class = anim
window.sr = ScrollReveal();
sr.reveal('.anim');

$(function() {
  $(window).scroll(function() {
    var scroll = $(window).scrollTop(); // how many pixels you've scrolled
    var os = $('#profile').offset().top; // pixels to the top of div1
    var ht = $('#profile').height(); // height of div1 in pixels
    // if you've scrolled further than the top of div1 plus it's height
    // change the color. either by adding a class or setting a css property
    if (scroll > os + ht) {
      $('#install').addClass('poop');
    }
  });
});

// Age Calulator
// function calculate_age(dob) {
//    var diff_ms = Date.now() - dob.getTime();
//    var age_dt = new Date(diff_ms);
//
//    return Math.abs(age_dt.getUTCFullYear() - 1970);
//}

// document.getElementById('age').innerHTML = (calculate_age(new Date(0,0,0)));

document.getElementById('read-more-work-experience').addEventListener('click', expandWorkExperience);

function expandWorkExperience() {
  document.getElementById('work-experience').style.height = "1000px";
}