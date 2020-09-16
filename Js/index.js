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
    $('a[href^="#"]').on('click', function(e){
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
	var primarySlider = new Splide( '#primary-slider', {
        type       : 'fade',
        rewind     : true,
		pagination : true,
		arrows     : false,
	} ).mount();;
} );