"use strict";

var isMobile = {
  Android: function() {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function() {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function() {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function() {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function() {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function() {
    return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
  }
};

var defaultVideoOptions = {
  controls: false,
  autoplay: false ,
  preload:  'auto',
  muted:    true
};

var vOffset = 300;

if(isMobile.any()) {
  defaultVideoOptions.controls = true;
  vOffset = 150;
}

var video1 = videojs('v1',defaultVideoOptions, function() {
  this.on('ended',function() {
    if($.scrollify.current()[0].id === 'sacem-demo-1') {
      $.scrollify.next();
    }
  });
});
var video2 = videojs('v2',defaultVideoOptions, function() {
  this.on('ended',function() {
    if($.scrollify.current()[0].id === 'sacem-demo-2') {
      $.scrollify.next();
    }
  });
});
var video3 = videojs('v3',defaultVideoOptions, function() {
  this.on('ended',function() {
    if($.scrollify.current()[0].id === 'sacem-demo-3') {
      $.scrollify.next();
    }
  });
});

jQuery(document).ready(function($){

  var wow = new WOW({
    boxClass:     'wow'
  });

  wow.init();

  $.scrollify({
    section : ".sacem-section",
    sectionName : false,
    interstitialSection : '.section-contact,.footer',
    before :function(i,panels) {
      var currentSectionId = panels[i][0].id;
      if (currentSectionId === 'sacem-demo-1') {
        video1.load();
        video1.play();
      } else if (currentSectionId === 'sacem-demo-2') {
        video2.load();
        video2.play();
      } else if (currentSectionId === 'sacem-demo-3'){
        video3.load();
        video3.play();
      }
    }
  });

});
