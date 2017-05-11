$(function() {
	d3.csv('data/data.csv', function(error, data){
		var chartData;

		var prepData = function(){
			chartData = data.map(function(d) {
				return {
					id: d.fruit,
					count: d.count
				};
			});
		};

		prepData();
		console.log(chartData);

		var donut = DonutChart();

		var chartWrapper = d3.select('#chart')
			.datum(chartData)
			.call(donut);

	});
})