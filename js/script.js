$(document).ready(function(){
    $('li.rd-nav-item').click(function(){
        $('li.rd-nav-item').removeClass('active');
        $(this).addClass('active');
    });
    $('.rd-navbar-toggle').click(function(){
        $('.rd-navbar-minimal.rd-navbar-static .rd-navbar-main-element').slideToggle();
    });
});
// Slider 
console.clear();

var slides = $('input[name="slider"]'),
    amount = slides.length,
    number = null,
    currentSlide = null;
console.log(slides);

$(function() {
  setInterval(function () {
    currentSlide = $('input[name="slider"]:checked');
    number = parseInt($(currentSlide).attr('title').slice(5,6));

    console.log('---Current slide');
    console.log(number); //current slide number

    console.log('---Slides array');
    console.log(slides);

    if (number < (amount - 1)) {
      $(slides[number+1]).prop('checked', true);
      console.log('%c---Slide changed to next', 'color: green;');
    } else {
      $(slides[0]).prop('checked', true);
      console.log('%c---Slide changed to 0', 'color: red;');
    }
  }, 2000);
});


