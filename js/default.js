$('.nav_open').click(function(){
        $('.nav_open').addClass('on');
        $('.b01').hide();
        $('.navbar-bg').stop().animate({'left':0});
        $('.wrap').stop().animate({'left':'71.0938vw'});
        $('.mask').stop().fadeIn();
        $('.sub').css({'display':'none'});
        $('.navbar-nav>li>a').removeClass('on');
})
$('.mask').click(function(){
        $('.nav_open').removeClass('on');
        $('.b01').fadeIn('fast');
        $('.navbar-bg').stop().animate({'left':'-71.09375vw'});
        $('.wrap').stop().animate({'left':0});
        $('.mask').stop().fadeOut();
})

$('.navbar-nav>li>a').click(function(){
    if($(this).hasClass('on')){
        $(this).parents().next('.sub').slideUp();
        $(this).removeClass('on');
    } else {
        $('.sub').slideUp();
        $('.navbar-nav>li>a').removeClass('on');
        $(this).parents().next('.sub').slideDown();
        $(this).addClass('on');
    }
})
    var swiper = new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
      },
    });

/*
$('.search_btn').click(function(){
    $('.find_form').slideToggle('fast');
})
*/

$('.country').click(function(){
    if($('.select').hasClass('on')){
        $('.select').animate({'top':0});
        $('.select').removeClass('on');
        $('.select').css({'display':'none'});
    } else {
        $('.select').animate({'top':'-48vw'});
        $('.select').addClass('on');
        $('.select').css({'display':'block'});
    }
})



















