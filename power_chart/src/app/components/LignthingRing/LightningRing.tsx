'use client';

import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

export default function LightningRing() {
    const options = {
        title: {
          text: '',
          align: 'center'
        },
        legend: {
          enabled: false
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        accessibility: {
            point: {
            valueSuffix: '%'
            }
        },
        plotOptions: {
            pie:{
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<span style="opacity: 0.6">{point.percentage:.1f} %</span>',
                    connectorColor: 'rgba(128,128,128,0.5)'
                }
            },
            series: {
                borderWidth: 0,
                borderRadius:0,
                colorByPoint: true,
                type: 'pie',
                size: '100%',
                innerSize: '50%',
                dataLabels: {
                enabled: true,
                crop: false,
                distance: '10%',
                style: {
                    fontWeight: 'bold',
                    fontSize: '16px'
                },
                connectorWidth: 2,
                connectorHeight:10
                }
            }
        },
        colors: ["#89CFF0","#72A0C1","#7CB9E8","#0066b2","#002D62","#B9D9EB",],
        series: [
          {
            type: 'pie',
            name: "chart",
            data: [10292, 4000, 9000,300, 7500, 14500]
          }
        ]
      };
    return (
        <HighchartsReact highcharts={Highcharts} options={options} />  
    );
};


