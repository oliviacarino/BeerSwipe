// Liquid Preloader
(function($){
  'use strict';
    $(window).on('load', function () {
        if ($(".loader").length > 0)
        {
            $(".loader").fadeOut("slow");
        }
    });
})(jQuery)
