$(document).ready(function() {
    $('#box').click(function(){
        $('#box').animate({left: '+=50%'}, 2000);
        $("#box").animate({top: '+=50%'}, 2000);
        $("#box").animate({left: '-=50%'}, 2000);
        $("#box").animate({top: '-=50%'}, 2000);
      });
});