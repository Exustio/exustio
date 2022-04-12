$(document).ready(function() {
    $(".typeInfo").hide();
    $(".showType").change(function() {
        var checkId = $(this).attr("id");
        $('.typeInfo').each(function(index, value) {
            var typeId = $(this).data("id");
            if (checkId == typeId) {
                $(this).toggle();
            }
        });
    });
});

$(document).ready(function() {
    var cH = $('#crosshair-h'),
        cV = $('#crosshair-v');
    $(this).on('mousemove touchmove', function(e) {
        var x = e.pageX - 1;
        var y = e.pageY - 1;
        var x_round = Math.round(x / 2.5) * 1.25;
        var y_round = Math.round(y / 2.5) * 1.25;
        var x_fixed = x_round.toFixed(2);
        var y_fixed = y_round.toFixed(2);
        cH.css('top', e.pageY);
        cV.css('left', e.pageX);
        $('#mousepos').css( {
            top: e.pageY + 'px',
            left: e.pageX + 'px'
        }, 800);
        $('#mousepos').text(
            "X:\xa0" + x_fixed + "\u00B0\xa0" +
            "Y:\xa0" + y_fixed + "\u00B0");
        e.stopPropagation();
    });
    $(document).hover(function(){
    });
    e.stopPropagation();
});