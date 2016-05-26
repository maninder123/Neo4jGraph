var node = getData({
    "query": "MATCH (n:Person) RETURN {name: n.name, group:toInt(n.group)}",
}, "Error");

var links = getData({
    "query": "MATCH (n:Relation) RETURN {source:toInt(n.source), value:toInt(n.value), target:toInt(n.target)}",
}, "Error");

$(document).ready(function () {
    var chartData = sanatizeData(node, links);
    
    drawChart(chartData, "error");
    
    $(window).resize(function(){
        $('svg').remove();
        drawChart(chartData, "error");
    })

});