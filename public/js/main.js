//GLOBAL VARIABLES
var nav = document.querySelector('.nav');
var topOfNav = nav.offsetTop;
$(document).ready(function () {

    $(".header__container").localScroll();
    $(".nav").localScroll();
    init(); //run function init
});

function init() {
    scrollAndSpinner();
    fixNav();
    waypointAnimations();
    toggleNav();
}


function scrollAndSpinner() {

    var $loadSpinner = $(".loader");
    window.addEventListener("load", function (e) {
        $loadSpinner.css({
            'display': 'none'
        });
    });

}

function waypointAnimations() {

    var animationend = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";


    /*
    add class animate when  user scorlls past nav, remove if user returns upwards
    */
    function navAnimate() {
        var animation = "animated fadeInDown",
            $nav = $(".nav");
        $nav.waypoint(function (direction) {
            if (direction == 'down') {

                $nav.addClass(animation);
            } else {
                $($nav).removeClass(animation);
            }

        }, {
            offset: "0%"
        });
    }

    function cardAnimate() {
        var animate = "animated fadeInLeft",
            $cards = $(".card");
        $cards.waypoint(function () {
            $cards.addClass(animate);
        }, {
            offset: "50%"
        });
    }

    function aboutAnimate() {
        var animate1 = "animated slideInLeft",
            animate2 = "animated slideInRight",
            animate3 = "animated fadeInUp",
            $aboutProfile = $(".about__column--1"),
            $aboutSkills = $(".about__column--2"),
            $aboutExtra = $(".about--2");
        $aboutProfile.waypoint(function () {
            $aboutProfile.addClass(animate1);

        }, {
            offset: "95%"
        });
        $aboutSkills.waypoint(function () {
            $aboutSkills.addClass(animate2);
        }, {
            offset: "95%"
        });
        $aboutExtra.waypoint(function () {
            $aboutExtra.addClass(animate3);
        }, {
            offset: "85%"
        });
    }

    function workAnimate() {
        var animate1 = "animated bounceIn",
            animate2 = "animated fadeInLeft",
            $workText = $(".work__item"),
            $workProjects = $(".work__item--2");
        $workText.waypoint(function () {
            $workText.addClass(animate1);
        }, {
            offset: "75%"
        });
        $workProjects.waypoint(function () {
            $workProjects.addClass(animate2);
        }, {
            offset: "75%"
        });
    }

    function contactAnimate() {
        var animate1 = "animated bounceIn",

            $contact = $(".contact"),
            $footer = $(".footer");
        $contact.waypoint(function () {
            $contact.addClass(animate1);

        }, {
            offset: "60%"
        });
    }




    //call functions
    navAnimate();
    cardAnimate();
    aboutAnimate();
    workAnimate();
    contactAnimate();

}

function toggleNav() {
    var $toggle = $('.nav__toggle'),
        $navContainer = $(".nav__navigation-container"),
        $navDownload = $("nav__download-container");
    $navContainer.addClass("animated");
    $toggle.click(function () {
        //show menu







        if ($navContainer.css("display") == "none") {

            $navContainer.removeClass("animated fadeOut");
            $navContainer.addClass("animated fadeInDown");
            $navContainer.css("display", "flex");
            $navContainer.css("visibility", "visible");

        } else if ($navContainer.css('display') == 'flex') {
            console.log("help");
            $navContainer.removeClass("fadeInDown");
            $navContainer.addClass("fadeOut");
            setTimeout(function()
        {
            $navContainer.css("display", "none")
            $navContainer.css("visibility", "hidden");

        },300);
          


        }
     
    });
}



function fixNav() {
    window.addEventListener('scroll', fixNav);
    if (window.scrollY >= topOfNav) {

        // Make the navbar sticky
        //Add padding-top to body
        document.body.style.paddingTop = nav.offsetHeight + 'px';
        //Add .fixed-nav class to body
        nav.classList.add('fixed-nav');

    } else {
        //remove the navbar from sticking


        nav.classList.remove('fixed-nav');
        document.body.style.paddingTop = 0;

    }
}