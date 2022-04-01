$(window).scroll(function() {
    $('#heading').css( {
        'left': $(this).scrollLeft()
    });
});

$(document).ready(function() {
    $('#image-map').css({
        'width':$('#image-map img').width(),
        'height':$('#image-map img').height()
    })

    var tooltipDirection;

    for (i=0; i<$(".pin").length; i++) {
        if ($(".pin").eq(i).hasClass('pin-down')) {
            tooltipDirection = 'tooltip-down';
        }
        else {
            tooltipDirection = 'tooltip-up';
        }
        $("#image-map").append("<div style='left:" + 
                               $(".pin").eq(i).data('xpos')*2 + "px; top:" + 
                               $(".pin").eq(i).data('ypos')*2 + "px' class='" + 
                               tooltipDirection + "'> \ <div class='tooltip'>" + 
                               $(".pin").eq(i).html() + "</div> \ </div>");
    }

    $('.tooltip-up, .tooltip-down').mouseenter(function() {
        $(this).children('.tooltip').fadeIn(100);
    }).mouseleave(function() {
        $(this).children('.tooltip').fadeOut(100);
    })
});