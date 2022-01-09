$(document).ready(function(){
    $(".btn").on("click",function(){
        $(".submenu").slideToggle(500);
        $(".btn").hover(function(){
            //$(".submenu").show()
        });
    });
});