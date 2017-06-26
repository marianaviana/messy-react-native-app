import React, { Component } from 'react';
import ChartView from 'react-native-highcharts';

class BodyCompositionChart extends Component {

  render() {
    const assessment = this.props.assessment;
    const pollock = this.props.pollock;
    const Highcharts = 'Highcharts';
    const conf = {
            chart: {
                type: 'column',
                animation: Highcharts.svg, // don't animate in old IE
                marginRight: 10,
            },
            title: {
                text: 'Composição Corporal (Kg)'
            },
            xAxis: {
              categories: ['Atual', 'P. Min', 'P. Max', 'Gordo', 'Magro']
            },
            yAxis: {
                title: '',
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            legend: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
            colors: ['#000080', '#ff0000', '#722f37', '#CCCC00', 'green'],
            plotOptions: {
              column: { colorByPoint: true }
            },
            series: [{
                name: 'Dados em quilos',
                yAxis: 0,
                dataLabels: { enabled: true },
                showInLegend: false,
                data: [assessment.weight, assessment.imc.ideal_min_weight,
                      assessment.imc.ideal_max_weight, pollock.fat_weight,
                      pollock.lean_body_mass]
            }]
        };
    return (
      <ChartView style={{ height: 300 }} config={conf} />
    );
  }
}

export default BodyCompositionChart;
