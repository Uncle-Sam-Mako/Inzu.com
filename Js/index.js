//
const house = document.querySelector('.house-item');
const townBox = document.querySelector('.town-item.kin');
for(let i = 0, c = 1; i<=c; i++){
    const newHouse = house.cloneNode(true);
    const newItem = townBox.cloneNode(true);
    townBox.parentNode.appendChild(newItem);
    house.parentNode.appendChild(newHouse);
}
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