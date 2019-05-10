$( document ).ready(function () { 
   
});

$( document ).ready(function () { 
    
});

$( document ).ready(function () { 
    
});

$( document ).ready(function () { 
    
});

$( document ).ready(function () {
   

});
$( document ).ready(function () {
	$('#highCharts').click(function() {
		 var chart = $('#city').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Sales by city'
        },
        subtitle: {
            text: 'Statistics of 2012'
        },
        credits: {
            text: 'Packt Publishing',
            href: 'http://www.packtpub.com'
        },
        xAxis: {
            categories: ['London', 'Paris', 'Madrid']
        },
        yAxis: {
            title: {
                text: 'Sales'
            },
            plotLines: [{
                color: '#FF0000',
                width: 2,
                value: 2500
            }],
            plotBands: [{
                color: 'rgba(124,252,0, 0.3)',
                from: 1000,
                to: 1500,
                label: {
                    text: 'Expected Sales'
                }
            }]
        },
        tooltip: {
            valueSuffix: ' Units'
        },
        legend: {
            align: 'right',
            verticalAlign: 'top',
            floating: true
        },
        series: [{
            name: '2011',
            data: [1000, 2500, 1500]
        },
        {
            name: '2012',
            data: [1200, 2200, 1700]
        }]
    });
	
	var chart = $('#energy').highcharts({
        chart: {
            type: 'line',
            zoomType: 'x'
        },
        title: {
            text: 'Energy consumption linked to the temperature'
        },
        xAxis: {
            type: 'datetime',
            title: {
                text: null
            }
        },
        yAxis: [
            {
                title: {
                    text: 'Temperature'
                },
                min:0
            },
            {
                title: {
                    text: 'Electricity consumed'
                },
                opposite:true,
                min:0
            }
        ],
        tooltip: {
            crosshairs: true,
            shared: true
        },
        series: [
            {
                name: 'Temperature',
                pointInterval: 24 * 3600 * 1000,
                pointStart: Date.UTC(2013, 0, 01),
                data: [17.5, 16.2, 16.1, 16.1, 15.9, 15.8, 16.2],
                tooltip: {
                    valueSuffix: ' °C'
                },
                yAxis: 0
            },
            {
                name: 'Electricity consumption',
                data: [
                     [Date.UTC(2013, 0, 01), 8.1],
                     [Date.UTC(2013, 0, 02), 6.2],
                     [Date.UTC(2013, 0, 03), 7.3],
                     [Date.UTC(2013, 0, 05), 7.1],
                     [Date.UTC(2013, 0, 06), 12.3],
                     [Date.UTC(2013, 0, 07), 10.2]
                ],
                tooltip: {
                    valueSuffix: ' KWh'
                },
                yAxis: 1
            }
        ]
    });
	var chart = $('#age').highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Age pyramid of employees'
        },
        xAxis: {
            categories: ['40-55', '25-40', '18-25']
        },
        yAxis: {
            title: {
                text: 'Number of employees'
            }
        },
        plotOptions: {
            series: {
                stacking: 'normal'
            }
        },
        series: [
            {
                name: 'Male',
                data: [835, 2635, 1437],
                stack: 1,
                color: '#6495ED'
            },
            {
                name: 'Female',
                data: [785, 2435, 1657],
                stack: 1,
                color: '#DC143C'
            }
        ]
    });
	var chart = $('#os').highcharts({
       chart: {
          type: 'pie'
       },
       title: {
          text: 'Operating Systems used in a company'
       },
       plotOptions: {
          pie: {
             allowPointSelect: true,
             showInLegend: true,
             tooltip: {
                valueSuffix: ' %'
             },
             dataLabels: {
                enabled: true,
                color: '#000000',
                connectorColor: '#888888',
                formatter: function() {
                   return '<b>'+ this.point.name +'</b>: '+ 
                          this.percentage +' %';
                }
             }
          }
       },
       series: [{
          name: 'Operating Systems',
          data: [
             ['Windows 7', 45],
             ['Windows XP', 35], //First way
             {
                name: 'Mac OS X',
                color: '#CC0033',
                y: 20
             } //Second way
          ]
       }]
    });
	
	$.ajax("chart.txt", {
      success: function (result) {
        var jsonObject = jQuery.parseJSON(result)
        var chart = 
$('#evo').highcharts(jsonObject);
       }
   });
	});
});