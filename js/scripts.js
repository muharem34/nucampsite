// Carousel function
$(function() {
    $(".carousel").carousel( { interval: 2000 } );
    $("#carouselButton").click(function(){
        if ($("#carouselButton").children("i").hasClass("fa-pause")) {
            $(".carousel").carousel("pause");
            $("#carouselButton").children("i").removeClass("fa-pause");
            $("#carouselButton").children("i").addClass("fa-play");
        } else {
            $(".carousel").carousel("cycle");
            $("#carouselButton").children("i").removeClass("fa-play");
            $("#carouselButton").children("i").addClass("fa-pause"); 
        }
    });
});

//when reserveCampsite button is clicked reserveCampsite modal is called
//task2
$(function(){
    $("#reserveButton").click(function(){
        $("#reserveModal").modal();
        
    });
});

//when login button is clicked login modal is called
$(function(){
    $("#loginButton").click(function(){
        $("#loginModal").modal();
        
    });
});