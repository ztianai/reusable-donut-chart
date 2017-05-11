$(function() {

    var xVar = 'count';
    var chartData;
    // var yVar = 'inventory';

    d3.csv('data/data.csv', function(error, data){
        var prepData = function(variable) {
            chartData = data.map(function(d) {
                return {
                    id: d.fruit,
                    count: d[variable]
                };
            });
        }

        prepData(xVar);

        var donut = DonutChart();



        var chartWrapper = d3.select('#chart')
            .datum(chartData)
            .call(donut);

        // prepData(yVar);

        // donut.height(1000);
        // console.log(chartData);
        // chartWrapper.datum(chartData).call(donut);

        // donut.height(1000);
        // chartWrapper.enter()
        //     .merge(chartWrapper)
        //     .datum(chartData)
        //     .call(donut);
        // chartWrapper.exit().remove();
    //             .data(nestedData)

    //         charts.enter().append("div")
    //             .attr('class', 'chart')
    //             .merge(charts)
    //             .call(scatter);

    //         charts.exit().remove();
    })

});