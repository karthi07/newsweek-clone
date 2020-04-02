$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if(scroll < 100 && window.innerWidth > 992 ){
        $('.header2').css('display', 'none');
    } else{
        $('.header2').css('display', 'flex');
    }
});