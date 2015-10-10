

function percentageCircle($blue, percent) {

  var $trail = $blue.find('#trailBorder');

  //set a uniformed time, for setInterval
  var tick = 360/(percent/100 * 360)
  if (tick > 20) { tick = tick * 3; }
  console.log(tick);

  var i = 0;
  var animation = setInterval(function () {
    i += 1;
    $blue.css('background-image','linear-gradient(' + (i - 90) + 'deg, transparent 49%, #2D6296 51%)');

    if (i > 180) {
      $trail.css('background-image','linear-gradient(90deg, transparent 50%, #2D6296 50%)');
    }

    if (i/360 * 100 >= percent) { clearInterval(animation); }

  }, 3)
}

$(document).ready(function () {

  percentageCircle($('#blueBorder.left'), 97)
  percentageCircle($('#blueBorder.mid'), 3.3)
  percentageCircle($('#blueBorder.right'), 75)

})
