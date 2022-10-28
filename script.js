var player = document.getElementById('radioPlayer');
var radioVolume = document.getElementById('radioVol');
var userVolume = 50;



$('.button-play').click(function() {
  icon = $(this).find('i');
  
  if (icon.hasClass('fa-pause')) {
    icon.removeClass('fa-pause');
    icon.addClass('fa-play');
    if (player.src != "https://streams.radio.co/s9ee62009a/listen"){
      player.src = "https://streams.radio.co/s9ee62009a/listen";
    }
    player.pause();
    waveAfterWave();
  } else {
    icon.removeClass('fa-play');
    icon.addClass('fa-pause');
    player.play();
    $('.wave').removeClass('no-animation');
  }
});

$('.button-stop').click(function() {
  icon = $('.button-play').find('i');
  
  if (icon.hasClass('fa-pause')) {
    icon.removeClass('fa-pause');
    icon.addClass('fa-play');
    player.src = "https://streams.radio.co/s9ee62009a/listen";
  }
  waveAfterWave();
});

$('.button-sound').click(function() {
  icon = $(this).find('i');
  
  if (icon.hasClass('fa-volume-off')) {
    radioVolume.value = userVolume;
  } else {
    radioVolume.value = 0;
  }
  setVolume();
});

function setVolume() {
  player.volume = radioVolume.value;
  checkVolume();
};

function checkVolume() {
  icon = $('.button-sound').find('i');
  
  if (radioVolume.value == 0) {
    icon.removeClass('fa-volume-up');
    icon.removeClass('fa-volume-down');
    icon.addClass('fa-volume-off');
  } else if (radioVolume.value < 50) {
    icon.removeClass('fa-volume-off');
    icon.removeClass('fa-volume-up');
    icon.addClass('fa-volume-down');
    userVolume = radioVolume.value;
  } else {
    icon.removeClass('fa-volume-off');
    icon.removeClass('fa-volume-down');
    icon.addClass('fa-volume-up');
    userVolume = radioVolume.value;
  }
};

function waveAfterWave() {
  $('.wave').each(function(){
    height = $(this).height();
    $(this).css('height', height);
  });
  $('.wave').addClass('no-animation');
};
