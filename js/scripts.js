$(document).ready(function() {
	$('#splash_title').css("visibility","visible").hide().fadeIn(2000);
});

$(document).ready(function() {
	$('#splash_title_sub').css("visibility","visible").hide().fadeIn(4000);
});

$(window).scroll(function() {
   var video = $('#bgvid');
   var st = $(this).scrollTop()-200;
   video.css({ opacity : (1 - st/400)});
});

$(window).scroll(function() {
    var work = $('#our_work'),
        wh = $(window).height(),
        dt = $(document).scrollTop(),
        workView  = wh - (work.offset().top - dt - 500),
        op;

    if (workView > 0) {
        op = 1 / (wh + work.height()) * workView;
        if (op < 1)
            work.css({opacity: op});
    }
});

$(document).ready(function(){
	$("#our_work").fitVids();
});