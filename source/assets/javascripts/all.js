//= require jquery-1.9.1.min
//= require leaflet-0.5.1
//= require bootstrap.min
//= require jquery.fitvids
//= require jquery.sequence-min
//= require jquery.bxslider
//= require main-menu
//= require template
//= require modernizr-2.6.2-respond-1.1.0.min
//= require material.min
//= require ripples.min
//= require jquery.cycle.all
//= require jquery.scrollupformenu.js

$(document).ready(function() {


    // Call to action button
    // --------------------------------------------
    var setCTAButton = function () {
        var width = $("#cta").width();
        var bodywidth = $(window).width();
        $("#cta").css({left: (bodywidth - width)/2});
    }
    setCTAButton();

    $('.menu-button').on('click', function(e){
        var scrollto = this.dataset.scroll;
        var offset = $("#"+scrollto).offset().top;
        if (offset) {
            e.preventDefault();
            $('html, body').animate({ scrollTop: offset }, 300);
        }
    });

    $('#cta').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#pysanka").offset().top
        }, 500);
    });
    $(window).scroll(function(){
        if($(window).scrollTop() < 20){
            $("#cta").fadeIn("slow");
        }
        else {
            $("#cta").fadeOut("slow");

        }
    });


    var setTopDiv = function  () {
        var pixelsFromTheTop = $(".mainmenu-wrapper").height();
        $(".section-top").parent().parent().css({ 'margin-top': pixelsFromTheTop });
    };
    setTopDiv();


    $('.dropdown-toggle').dropdown();

    $.material.init();

    $('#rotator').cycle({
        fx: 'fade',
        speed: 3000
    });

    $('.mainmenu-wrapper').scrollUpMenu({
        waitTime: 200,
        transitionTime: 150,
        menuCss: { 'position': 'fixed',
                   'top': '0',
                   'width': '100%',
                   'background-color': "rgba(255,255,255,0.5)"
                 }
    })

    var bodyheight = $(window).height();
    $("#sequence").height(bodyheight);

    // To TOP button
    //
    $("#toTop").css("display", "none");
    $(window).scroll(function(){
        if($(window).scrollTop() > 0){
            $("#toTop").fadeIn("slow");
        }
        else {
            $("#toTop").fadeOut("slow");

        }
    });

    $("#toTop").click(function(){
        event.preventDefault();
        $("html, body").animate({ scrollTop:0 }, "slow");
    });


    $(window).resize(function() {
        var bodyheight = $(window).height();
        $("#sequence").height(bodyheight);
        setTopDiv();
        setCTAButton();
    });

});
