var $button = document.querySelector('.increment-btn');
var $counter = document.querySelector('.counter');

$button.addEventListener('click', function(){
  $counter.value = parseInt($counter.value) + 1; // `parseInt` converts the `value` from a string to a number
}, false);