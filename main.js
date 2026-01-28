$(document).ready(function () {

    $("#menuIcon").click(function () {

        $(this).toggleClass("active");

        if ($("#sidebar").hasClass("open")) {
            $("#sidebar").animate({ left: "-190px" }, 300);
            $("#sidebar").removeClass("open");
        } else {
            $("#sidebar").animate({ left: "0px" }, 300);
            $("#sidebar").addClass("open");
        }
    });

});
