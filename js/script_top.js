
var BottomPosition = 0;
var BottomFlag = false;
var AnimateFlag = false;

$(document).ready(function() {
    $('.inTop').click(function() {
        AnimateFlag = true;
        if(BottomFlag) {
            $("body,html").animate({"scrollTop":BottomPosition}, 200, function() {
                AnimateFlag = false;
            });
            BottomFlag = false;
            $('.inTop span').html('GO TO TOP');
        }
        else {
            $("body,html").animate({"scrollTop":0}, 200, function() {
                AnimateFlag = false;
            });
            BottomPosition = $(window).scrollTop();
            BottomFlag = true;
            $('.inTop span').html('GO TO BOTTOM');
        }
    });


    $(window).scroll(function(event) {
        var countScroll = $(window).scrollTop();
        if (countScroll > 200 && !AnimateFlag) {
            $('.inTop').show();
            if(BottomFlag) {
                BottomFlag = false;
                $('.inTop span').html('GO TO TOP');
            }
        }
        else {
            if(!BottomFlag) {
                $('.inTop').hide();
            }
        }
    });
});