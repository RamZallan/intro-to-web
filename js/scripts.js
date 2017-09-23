const transitionTime = 200;
$(document).keydown(function(e) {
     let key = e.which;
      if(key == 40) {
          e.preventDefault();
          var pageHeight = $(window).height();
          $('html, body').animate({
              scrollTop: pageHeight
          }, transitionTime);
          return false;
      }
       if(key == 38) {
           e.preventDefault();
           var pageHeight = $(window).height();
           $('html, body').animate({
               scrollTop: -pageHeight
           }, transitionTime);
           return false;
       }
});
