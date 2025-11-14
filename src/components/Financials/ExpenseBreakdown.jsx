import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const ExpenseBreakdown = ({ data }) => {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        data: data.data,
        backgroundColor: data.colors,
        borderColor: '#fff',
        borderWidth: 3,
        hoverOffset: 10,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          usePointStyle: true,
          padding: 15,
          font: { size: 12, weight: '600' },
          color: '#1f2937',
        },
      },
    },
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 card-hover animate-slideUp" style={{ animationDelay: '0.2s' }}>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Expense Breakdown</h2>
      <div className="relative h-64">
        <Doughnut data={chartData} options={options} />
      </div>
    </div>
  );
};

export default ExpenseBreakdown;
