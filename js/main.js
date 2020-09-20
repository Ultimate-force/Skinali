$(window).load(function () {
  $(".before-after").twentytwenty({
    before_label: 'Без скинали', // Set a custom before label
    after_label: 'Со скинали' // Set a custom after label
   });
   $('.before-slider').slick({
     draggable: false,
     dots: true,
     dotsClass: 'before-slider__dots',
     prevArrow: $('.arrow-left'),
     nextArrow: $('.arrow-right')
   });
   $('.menu-button').on('click', function () {
     $('.menu').toggleClass('menu_active');
   });

    /* Настройка select */
   $('.select_checked').on('click', function () {
     $('.select__dropdown').toggleClass('select__dropdown_open');
   });
   $('.select__option').on('click', function (){
     var value = $(this).attr('data-value');
     $('#select-type').val(value);
     $('.select_checked').text(value);
     $('.select__dropdown').toggleClass('select__dropdown_open');
   });
   $('[type="tel"]').mask('(999) 999-99-99');
    /* Если целью щелчка не является контейнер ...*/
   const $menu = $('.select__dropdown');
   $(document).mouseup(e => {
      if (!$menu.is(e.target) // if the target of the click isn't the container...
      && $menu.has(e.target).length === 0) // ... nor a descendant of the container
      {
        $menu.removeClass('select__dropdown_open');
      }
     });

    /* Настройка */
   $("a[href^='#']").click(function () {
     var _href = $(this).attr("href");
     $("html, body").animate({ scrollTop: $(_href).offset().top -45 + "px" });
     return false;
   });

   $('.menu-button').on('click', function () {
     $('.menu-button__line-1').toggleClass('open-1');
     $('.menu-button__line-2').toggleClass('open-2');
     $('.menu-button__line-3').toggleClass('open-3');
   });
     /* Показывать карту тогла когда user докрутил до нее */
     var reviews = $('.reviews');
     var reviewsTop = reviews.offset().top;
     $(window).bind('scroll', function () {
       var windowTop = $(this).scrollTop();
       if (windowTop > reviewsTop) {
         $('#map').html('<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A9ef67790d258ac107cdfc423310bd5a27387630f470d76362dfea436ae6bd08e&amp;width=100%25&amp;height=410&amp;lang=ru_RU&amp;scroll=false"></script>')
         $(window).unbind('scroll')
        }
     });
   
});