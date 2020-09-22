//

//Autocomplete
$( function(){
    let availableCountries = [
        "Congo",
        "Congo RD",
        "Rwanda",
        "Zambie",
        "South Africa"
    ];
    $("#availableCountries").autocomplete({
        source: availableCountries
    });
});
//Loader
window.addEventListener("load",()=>document.querySelector('#loader-box').className += " hide");

$(document).ready(function(){
    //lazyloading
    $("img.lazy").lazyload({
        effect: "fadeIn"
    });

    let moreFilters = $('.filters .more-filters'),
    moreFilersBtn = $('#more-filters-btn')
    moreFilters.hide();
    moreFilersBtn.click(function(){
        moreFilters.slideToggle('fast');
    });
    //ancre-fluide
    $('a[href^="#"].ancre').on('click', function(e){
        e.preventDefault();
        let link = $(this).attr('href'),
        elem = $(link);
        if(elem.length){
            let elemTop = elem.first().offset().top;
            $('html, body').animate({
                scrollTop: elemTop
            }, "fast");
        }
    });
});
//Carousel

     document.addEventListener( 'DOMContentLoaded', function () {
    var secondarySlider = new Splide( '#secondary-slider', {
        fixedWidth  : 100,
        height      : 60,
        gap         : 10,
        cover       : true,
        isNavigation: true,
        pagination : false,
        arrows : false,
        focus       : 'center',
        breakpoints : {
            '600': {
                fixedWidth: 66,
                height    : 40,
                arrows : true,
            }
        },
    } ).mount();
    
    var primarySlider = new Splide( '#primary-slider', {
        type       : 'fade',
        height     : 400,
        rewind     : true,
        cover      : true,
        pagination : false,
        arrows     : false,
        breakpoints : {
            600 : {
                height : 200
            },
            768 : {
                height : 300
            }
        }
    } );
    primarySlider.sync( secondarySlider ).mount();
    if (window.matchMedia("(max-width: 768px)").matches) {
        primarySlider.arrows = true;
    }
} );