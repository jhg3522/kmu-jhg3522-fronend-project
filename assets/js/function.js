$(".btn").click(function() {
    $("#menu,.page_cover,html,aside").addClass("open");
    window.location.hash = "#open";
});

window.onhashchange = function() {
    if (location.hash !== "#open") {
        $("#menu,.page_cover,html").removeClass("open");
    }
};