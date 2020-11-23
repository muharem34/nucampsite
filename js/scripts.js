//   <script>
//   $(function () {
//     $('[data-toggle="tooltip"]').tooltip();
// });


//     jquery scrip for carousel play/pause buttons code for the previous play/pause button -->

// $(function() {
//     $(".carousel").carousel( { interval: 2000, pause: "false"  } );  //The pause: "falese" eliminates issue in small devices
//     $("#carouselPause").click(function(){
//         $(".carousel").carousel("pause");
//     });
//     $("#carouselPlay").click(function(){
//         $(".carousel").carousel("cycle");
//     });
// });


// script for only single pause/play button to cycle to change when clicked


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

