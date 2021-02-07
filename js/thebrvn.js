$(function() {

    var header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();

    /* fixed header */
        checkScroll(scrollOffset);

    $(window).on("scroll", function() { 
        scrollOffset = $(this).scrollTop();
        
        checkScroll(scrollOffset);
    });

    

    function checkScroll(scrollOffset) {
        
        if( scrollOffset >= introH-100)  {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }

    /* smooth scroll */
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top-55;

            $("#header_nav a").removeClass("active");
            $this.addClass("active");

            $("html, body").animate({
                scrollTop: blockOffset
            }, 500);

    });

    /* menu nav toggle */
    $("#nav_toggle").on("click", function(event) {
        event.preventDefault();

        $(this).toggleClass("active");
        $("#header_nav").toggleClass("active");

    });

    $("#header_nav a").on('click', function(event) {
        event.preventDefault();
        
        $("#header_nav").removeClass("active");
        $("#nav_toggle").removeClass("active");
    });



});