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

//lazyloading
$(document).ready(function(){
    $("img.lazy").lazyload({
        effect: "fadeIn"
    });
})