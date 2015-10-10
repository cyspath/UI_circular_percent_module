

function percentageCircle($blue, percent, barColor) {

  var $trail = $blue.find('#trailBorder');

  //set a uniformed tick overall time, for setInterval
  var tick = 2000/(percent/100 * 360)
  //for purpose of smoother tick rate when percentage is low vs high, two separate tick rate vs print rate is needed
  if (percent < 25) {
    tick = tick / 2
  }


  var i = 0;
  var animation = setInterval(function () {
    //for purpose of smoother tick rate when percentage is low vs high, two separate tick rate vs print rate is needed
    if (percent > 25) {
      i += 2;
    } else {
      i += 1;
    }
    $blue.css('background-image','linear-gradient(' + (i - 90) + 'deg, transparent 49%, '+ barColor + ' 51%)');


    if (i > 180) {
      $trail.css('background-image','linear-gradient(90deg, transparent 50%, ' + barColor + ' 50%)');
    }

    if (i/360 * 100 >= percent) { clearInterval(animation); }

  }, tick)
}

$(document).ready(function () {

  percentageCircle($('#blueBorder.left'), 97, '#2D6296')
  percentageCircle($('#blueBorder.mid'), 3.3, '#2D6296')
  percentageCircle($('#blueBorder.right'), 75, '#2D6296')

})
