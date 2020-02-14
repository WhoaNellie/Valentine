$(document).ready(function(){

    $("#heart").hover(function(){
        $("#heart").attr("fill","url(#cats2)");
        $("#message2020").attr("style", "display: block;");
    }, function(){
        $("#heart").attr("fill","url(#cats1)");
        $("#message2020").attr("style", "display: none;");
    });

    $("#heart").click(function(){
        $("#heart").attr("fill","url(#cats2)");
        $("#message2020").attr("style", "display: block;");
    });
    $("#heart").focusout(function(){
        $("#heart").attr("fill","url(#cats1)");
        $("#message2020").attr("style", "display: none;");
    });

});