$(document).ready(function () {

    $("#contact-btn").click(function() {
        $("html, body").animate({scrollTop: $("#contact-footer").offset().top}, 1000);
    });

    $("#otzov-btn").click(function() {
        $("html, body").animate({scrollTop: $("#otzov-maincont").offset().top}, 1000);
    })

})