$(document).ready(function () {

    $("#heart").hover(function () {
        $("#heart").attr("fill", "url(#cats2)");
        $("#message2020").attr("style", "display: block;");
    }, function () {
        $("#heart").attr("fill", "url(#cats1)");
        $("#message2020").attr("style", "display: none;");
    });

    // $("#heart").click(function () {
    //     console.log("heart");
    //     $("#heart").attr("fill", "url(#cats2)");
    //     $("#message2020").attr("style", "left: 5%;");
    // });
    // $("#heart").focusout(function () {
    //     $("#heart").attr("fill", "url(#cats1)");
    //     $("#message2020").attr("style", "left: -9999px;");
    // });

    $(".v2020").click(function(){
        if($("#heart").attr("fill") == "url(#cats1)"){
            $("#heart").attr("fill","url(#cats2)");
            $("#message2020").attr("style", "display: block;");
        }else if($("#heart").attr("fill") == "url(#cats2)"){
            $("#heart").attr("fill","url(#cats1)");
            $("#message2020").attr("style", "display: none;");
        }
    });

});