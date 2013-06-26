$(function() {

    $('#top').hover(function() {
        $('img.top', $(this)).stop().animate({top: '200px'}, 500);
    },function() {
        $('img.top', $(this)).stop().animate({top: '0'}, 500);
    });
    
    $('#left').hover(function() {
        $('img.top', $(this)).stop().animate({left: '-300px'}, 500);
    },function() {
        $('img.top', $(this)).stop().animate({left: '0'}, 500);
    });
    
    $('#bottom-left').hover(function() {
        $('img.top', $(this)).stop().animate({left: '-300px', top: '200px'}, 500);
    },function() {
        $('img.top', $(this)).stop().animate({left: '0', top: '0'}, 500);
    });
    
    $('#bottom').hover(function() {
        $('img.top', $(this)).stop().animate({top: '-200px'}, 500);
    },function() {
        $('img.top', $(this)).stop().animate({top: '0'}, 500);
    });
    
    $('#right').hover(function() {
        $('img.top', $(this)).stop().animate({left: '300px'}, 500);
    },function() {
        $('img.top', $(this)).stop().animate({left: '0'}, 500);
    });
    
    $('#bottom-right').hover(function() {
        $('img.top', $(this)).stop().animate({left: '300px', top: '200px'}, 500);
    },function() {
        $('img.top', $(this)).stop().animate({left: '0', top: '0'}, 500);
    });
    
});