$(document).ready(function(){
    setTable();

    $("#inputDate").change(function(){
        let inputDate = $(this).val();
        let splitText = inputDate.split("-");
        setMonthAndDay(splitText[1],splitText[2]);
        setTable();
    });
});
function setTable(){
    $("#courseTable").empty();

    $("#courseTable").append(
        "<tr><th>日期</th><th>時間</th><th>賽程場數</th></tr>"
    );

    let topicCount = topicsArray.length;
    let oneDayMilliseconds = 24*60*60*1000;

    for(let x=0;x<topicCount;x++){
        
        let thisDate = new Date(startDate.getTime()+1*x*oneDayMilliseconds);
        let trSpecial = "<tr>";
        if(topicsArray[x]=="不上課"){
            trSpecial = "<tr style='background.color:lightyellow'>";
        }
        $("#courseTable").append(
            trSpecial+
            "<td>"+ "星期" + (x+1) + "</td>"+
            "<td>"+ thisDate.toLocaleDateString().slice(5) +"</td>"+
            "<td>" + topicsArray[x]+"</td>"+
            "</tr>" 
        );
    }
}




  