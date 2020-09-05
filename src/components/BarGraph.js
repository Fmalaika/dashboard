import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

class BarGraph extends Component {
    render() {
        const data = {
            labels: ['Jan', 'Feb', 'March'],
            datasets: [
                {
                    label: 'Sales',
                    data: ['1','2','3'],
                },
                {
                    label: 'Sale 2s',
                    data: ['2','2','3'],
                }
            ]
        }
        const options = {
            scales: {
                yAxes: [{
                    ticks: {
                        min: 0,
                        max: 6,
                        stepSize: 1
                    } 

                }]
            }
        }
        return (
            <div className="bar-graph">
               <Bar  data = {data} options={options}/>
            </div>
            )
        }
    }

 
    
export default BarGraph;