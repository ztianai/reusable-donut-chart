# reusable-donut-chart

Reusable donut chart is an API that allows you quickly and easily generate a donut chart. Donut chart has the ability to show the percentages of different features or elements of the dataset. Below is quick tutorial on how to use this reusable donut chart.

## Step 1 Clone the Repo and Setup
> Clone down this repo to your local machine. Once complete, create a new **index.html** file for showing the donut chart. In the **index.html**, include the necessary header and load in the donut chart script:

	<script src="js/DonutChart.js"></script>
> and the css file in the repo:

	<link rel="stylesheet" href="css/main.css" />
> make sure to include script for d3 library as well:

	<script src="https://d3js.org/d3.v4.js"></script>
> give a header and some description in the body of your index.html.

## Step 2 Read and Explore the DonutChart.js
> Before you start using this donut chart, take a look at the **DonutChart.js** file to get a better understand of this chart type. In order to draw a donut chart, we need to define an ```javascript arc ``` and a ```javascript pie ```. For more information on what they are and how they work, check out this [link](https://github.com/d3/d3/blob/master/API.md#pies)

## Step 3 Find Dataset
> Find a dataset that you want to use a donut chart to showcase the data. You need at least two columns in the dataset, one is the category or identifier, the other is a number, or count of the specific category. Store the csv file inside the data folder.

## Step 4 Load and process data
> Now you are ready to create donut chart. First, include a new `<div>` inside the body of index.html and assign a id to it.
> Create a new file under the js folder and name it **main.js**
> Now load in the data using ```javascript d3.csv()```
> Create a variable named `chartData` to hold the formatted data
> Create a function named `prepData` to process the dataset you pass in. Use `.map` method to format the data:
	
	var prepData = function() {
        chartData = data.map(function(d) {
            return {
                id: d.X,
                count: d.Y
            };
        });
    }
where **X** is the category column name in your dataset and **Y** is the count column name.




