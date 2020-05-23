$(document).ready(function(){
    console.log(typeof$("[type=range]").val()));
    $("LABEL").text($("[type=range]").val()+" "+fiveIndex[$("[type=range]").val()-1]);
    $("[type=range]").change(function(e){
        //console.log("Somebody chance it!");
        console.log(e);
        $("LABEL").text($("[type=range]").val()+" "+fiveIndex[$("[type=range]").val()-1]);
    });
    let currentQuiz=null;
    $("#startButton").click(function(){
        $("[type=range]").toggle();
    });
});