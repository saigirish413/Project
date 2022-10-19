
import React from 'react';
import {Bar} from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

  const data = {
    labels: ['Extremly likely', 'Very likely', 'Somewhat likely', 'Not so likely', 'Not at alllikely'],
    datasets: [{
      label: '# of percentages',
      data: [62, 30, 10, 17, 1],
      backgroundColor: [
        'rgba(75, 192, 192,0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(255, 99, 132, 0.5)',
        'rgba(255, 99, 132, 0.5)'
        
      ],
      borderColor: [
        'rgba(75, 192, 192, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(255, 99, 132, 0.5)',
        'rgba(255, 99, 132, 0.5)'
      ],
      borderWidth: 1
    }]
  }

export default function BarChart() {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
      );
   return (
    <div className="text-blue-500 mt-5">
      {/* <h2>Bar Example (custom size)</h2> */}
      <Bar
          data={data}
          width={400}
          height={200}
        
        />
       
    </div>
    
  )
}
  

