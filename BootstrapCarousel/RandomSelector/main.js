/*window.onload=function(){

};*/
$(document).ready(function(){
    $("input").click(function(){
       let numberOfListItem = $("#choices li").length;
       let randomChlidNumber = Math.floor(Math.random()*numberOfListItem);
        $("#random-result").text($("#choices li").eq(randomChlidNumber).text());
        $("#random-pic").attr("src",pictures[randomChlidNumber]);
    });
});
/*$(document).ready(function(){
    $("input").click(function(){
        //alert("Hi");
        //$("H1").text("Hello");
        $("H1").text($("li:first").text());
    });
});
$(document).ready(function(){
    $("input").click(function(){
        //alert("Hi");
        //$("H1").text("Hello");
        $("H1").text($("li:last").text());
    });
});
$(document).ready(function(){
    $("input").click(function(){
        //alert("Hi");
        //$("H1").text("Hello");
        $("H1").text($("li").eq(1).text());
    });
});*/