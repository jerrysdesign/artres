$(document).ready(function() {

  var mainSlider = document.getElementById('mainSlider');
  var    bullets = document.getElementById('position').getElementsByTagName('li');

  //
  window.slider1 = Swipe(mainSlider, {
    continuous: true,
    speed: 400,
    auto: 3000,
    callback: function(pos) {

      var i = bullets.length;
      while (i--) {
        bullets[i].className = '';
      }
      bullets[pos].className = 'on';
    }
  });
});