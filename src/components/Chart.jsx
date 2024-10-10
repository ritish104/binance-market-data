import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';


ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Chart = ({ chartData }) => {
  const data = {
    labels: chartData.map((d) => new Date(d.t)),
    datasets: [
      {
        label: 'Price',
        data: chartData.map((d) => d.c),
        borderColor: 'rgba(75,192,192,1)',
        fill: false,
      },
    ],
  };

  return <Line data={data} />;
};

export default Chart;
