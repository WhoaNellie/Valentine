$(document).ready(function(){

    $("#heart").hover(function(){
        $("#heart").attr("fill","url(#cats2)");
    }, function(){
        $("#heart").attr("fill","url(#cats1)");
    });

});