import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';

class DoughnutChart extends Component {
    render() {
        const data = {
            labels: ['Jan', 'Feb', 'March'],
            datasets: [
                {
                    label: 'Sales',
                    data: ['1','2','3'],
                    backgroundColor: [
                        'rgba(50,130,160,0.2)',
                        'rgba(50,130,160,0.2)',
                        'rgba(50,130,160,0.2)'
                    ],
                    borderColor: [
                        'rgba(50,130,160,0.2)',
                        'rgba(50,130,160,0.2)',
                        'rgba(50,130,160,0.2)'
                    ]
                },
               
            ]
        }
    
        return (
            <div className="doughnut-chart">
               <Doughnut  data = {data} />
            </div>
            )
        }
    }

 
    
export default DoughnutChart;