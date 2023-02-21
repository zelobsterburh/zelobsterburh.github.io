const WIDTH = document.getElementById("graph").clientWidth;
const HEIGHT = document.getElementById("graph").clientHeight;

const svg = d3.select("#graph").append("g");

d3.json("web.json").then( function( data) {

    const link = svg
        .selectAll("line")
        .data(data.links)
        .join("line")
        .style("stroke", "#aaa")

    const node = svg
        .selectAll("circle")
        .data(data.nodes)
        .join("circle")
        .attr("r", 20)
        .style("fill", "#69b3a2")

    const text = svg
        .selectAll("text")
        .data(data.nodes)
        .join("text")
        .text(function(d) { return d.name });

    const simulation = d3.forceSimulation(data.nodes)
        .force("link", d3.forceLink()
            .id(function(d) { return d.id; })
            .links(data.links)
        )
        .force("charge", d3.forceManyBody().strength(-1400))
        .force("center", d3.forceCenter(WIDTH / 2, HEIGHT / 2))
        .on("tick", ticked);

    function ticked() {
        link
            .attr("x1", function(d) { return d.source.x; })
            .attr("y1", function(d) { return d.source.y; })
            .attr("x2", function(d) { return d.target.x; })
            .attr("y2", function(d) { return d.target.y; });

        node
            .attr("cx", function(d) { return d.x+6; })
            .attr("cy", function(d) { return d.y-6; });

        text
            .attr("cx", function(d) { return d.x+6; })
            .attr("cy", function(d) { return d.y-6; })
            .style("font-size", "14px").style("fill", "#000000")
    }
});