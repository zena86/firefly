$(document).ready(function() {
    
    $(".hederBurger").click(function(event) {
        $(".hederBurger, .headerMenu").toggleClass("active");
        $("body").toggleClass("lock");
    });
        
    
    $('.paralax').on('mousemove',(e) => {
        const x = e.pageX / $(window).width();
        const y = e.pageY / $(window).height();
        
        $('.paralaxBg').css(
            'transform',
            'translate(-'+ x*15 + 'px,-' + y*15+'px)'
        );
        
        $('.paralaxContent').css(
            'transform',
            'translate('+ x*30 + 'px,' + y*30+'px)'
        );
        
    });
    
});

// Последняя строка - для запрета скрола при открытом меню