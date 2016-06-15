var data = [10,20,30,40];

var svg = d3.select("#svgholder").append("svg");


svg
    .selectAll(".bars")
    .data(data)
    .enter()
    .append("rect")
    .attr("x", function(d,i) {return 10 + i*20})
    .attr("y", function(d) {return 100 - d})
    .attr("height", function(d) {return d})
    .attr("width", function(d) {return 20})
