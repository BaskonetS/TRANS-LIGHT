$ (function() {

    let slider = $ ("#slider__project");

    slider.slick({
      
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    arrows: true,
    
  });

});


/* tabs */

$ (document).ready(function() {

  $ ('.tabs-triggers__item').click(function(e){

    e.preventDefault();

    $('.tabs-triggers__item').removeClass('tabs-triggers__item--active');
    $('.tabs-content__item').removeClass('tabs-content__item--active');

    $(this).addClass('tabs-triggers__item--active');
    $($(this).attr('href')).addClass('tabs-content__item--active');

  });

    $('.tabs-triggers__item:first').click();

});

/* tabs */