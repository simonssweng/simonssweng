$(document).ready(function(){
    $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>");

    let topicCount = topicsArray.length;
    let oneDayMilliseconds = 24*60*60*1000;
    for(let x = 0;x<topicCount;x++){
        let thisDate = new Date(startDate.getTime()+7*x*oneDayMilliseconds);
        $("#courseTable").append(
            "<tr>"+
            "<td>"+(x+1)+"</td>"+
            "<td>"+thisDate.toLocaleDateString().slice(5) +"</td>"+
            "<td>"+topicsArray[x]+"</td>"+
            "</tr>"
        );
    }
    /*for(let x=0;x<topicCount;x++){
        $("#courseTable").append(
            "<tr>"+
            "<td>"+ (x+1) + "</td>"+
            "<td>"+(startDate+7*x)+"</td>"+
            "<td>"+topicsArray[x]+"</td>"+
            "</tr>"
        );
    }*/
    /*for(let x=0;x<topicCount;x++){
        $("#courseTable").append(
            "<tr>"+
            "<td>"+ (x+1) + "</td>" +
            "<td> 預計日期 </td>" +
            "<td>"+topicsArray[x]+"</td>"+
            "</tr>"
        )
    }*/
    /*var topicCount = topicsArray.length;
    for(var x=0;x<topicCount;x++)
    {
        $("#courseTable").append("<tr>");
        $("#courseTable").append("<td>"+(x+1)+"</td>");
        $("#courseTable").append("<td>"+startDate+"</td>");
        $("#courseTable").append("<td>"+topicsArray[x]+"</td>");
        $("#courseTable").append("</tr>");
    }*/

});