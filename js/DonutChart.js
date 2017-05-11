var DonutChart = function() {
	var width = 500,
		height = 500,
		padAngle,
		cornerRadius,
	margin = {
		left: 70,
		bottom: 50,
		top: 30,
		right: 10,
	};

	var tooltipFont = 20,
		tooltipLeft = 240,
		tooltipTop = 330,
		tooltipPadding = 10,
		tooltipWidth = 200;


	var radius = width / 2;

	var color = d3.scaleOrdinal(d3.schemeCategory20);

	var chart = function(selection){

		selection.each(function(data) {
			var arc = d3.arc()
				.outerRadius(radius - 10)
				.innerRadius(radius - 70)
				.cornerRadius(cornerRadius)
				.padAngle(padAngle);

			var pie = d3.pie()
				.sort(null)
				.value(function(d) {
					return d.count;
				});

			var labelArc = d3.arc()
				.outerRadius(radius - 40)
				.innerRadius(radius - 40);


			var svg = selection.append('svg')
				.attr('width', width)
				.attr('height', height)
				.append('g')
				.attr('transform', 'translate(' + width/2 + "," + height/2 + ")");

			var g = svg.selectAll('.arc')
				.data(pie(data))
				.enter().append('g')
				.attr('class', 'arc');

			var path = g.append('path')
				.attr('d', arc)
				.style('fill', function(d) {
					return color(d.data.id);
				});

			g.append('text')
				.transition()
				.ease(d3.easeLinear)
				.duration(1200)
				.attr('transform', function(d) {
					return 'translate(' + labelArc.centroid(d) + ')';
				})
				.attr('dy', '.35em')
				.text(function(d) {return d.data.id;});

			function pieTween(b){
				b.innerRadius = 0;
				var i = d3.interpolate({startAngle: 0, endAngle: 0}, b);
				return function(t){
					return arc(i(t));
				};
			}

			var tooltip = d3.select('#chart')
				.append('div')
				.attr('class', 'tooltip')
				.style('background', '#eee')
				.style('box-shadow', '0 0 5px #999999')
				.style('color', '#333')
				.style('display', 'none')
				.style('font-size', tooltipFont + 'px')
				.style('left', tooltipLeft + 'px')
				.style('padding', tooltipPadding + 'px')
				.style('text-align', 'center')
				.style('top', tooltipTop + 'px')
				.style('width', tooltipWidth + 'px')
				.style('position', 'absolute');

			tooltip.append('div')
				.attr('class', 'label');

			tooltip.append('div')
				.attr('class', 'count');

			tooltip.append('div')
				.attr('class', 'percent');

			path.on('mouseover', function(d){
				var total = d3.sum(data.map(function(d){
					return d.count;
				}))

				var percent = Math.round(1000 * d.data.count / total) / 10;
				tooltip.select('.label').html(d.data.id);
				tooltip.select('.count').html(d.data.count);
				tooltip.select('.percent').html(percent + '%');
				tooltip.style('display', 'block');
			});

			path.on('mouseout', function(d){
				tooltip.style('display', 'none');
			});

			path.transition()
				.ease(d3.easeLinear)
				.duration(1000)
				.attrTween('d', pieTween);
		})

	}

	chart.height = function(value) {
		if (!arguments.length) return height;
		height = value;
		return chart;
	};

	chart.width = function(value) {
		if (!arguments.length) return width;
		width = value;
		return chart;
	};

	chart.radius = function(value) {
		if(!arguments.length) return radius;
		radius = value;
		return chart;
	};

	chart.padAngle = function(value) {
		if(!arguments.length) return padAngle;
		padAngle = value;
		return chart;
	};

	chart.cornerRadius = function(value){
		if(!arguments.length) return cornerRadius;
		cornerRadius = value;
		return chart;
	};

	chart.tooltipWidth = function(value){
		if(!arguments.length) return tooltipWidth;
		tooltipWidth = value;
		return chart;
	};

	chart.tooltipTop = function(value){
		if(!arguments.length) return tooltipTop;
		tooltipTop = value;
		return chart;
	};

	chart.tooltipPadding = function(value){
		if(!arguments.length) return tooltipPadding;
		tooltipPadding = value;
		return chart;
	};

	chart.tooltipLeft = function(value){
		if(!arguments.length) return tooltipLeft;
		tooltipLeft = value;
		return chart;
	};

	chart.tooltipFont = function(value){
		if(!arguments.length) return tooltipFont;
		tooltipFont = value;
		return chart;
	};

	

	return chart;
}

