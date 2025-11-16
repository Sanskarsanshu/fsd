import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const ExpenseBreakdown = ({ data }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const chartData = {
    labels: data.labels,
    datasets: [
      {
        data: data.data,
        backgroundColor: data.colors,
        borderColor: isDark ? '#000' : '#fff',
        borderWidth: 3,
        hoverOffset: 10,
        hoverBorderWidth: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          usePointStyle: true,
          padding: 12,
          font: { 
            size: window.innerWidth < 640 ? 10 : 12, 
            weight: '600' 
          },
          color: isDark ? '#fff' : '#1f2937',
        },
      },
      tooltip: {
        backgroundColor: isDark ? 'rgba(0, 0, 0, 0.9)' : 'rgba(255, 255, 255, 0.9)',
        titleColor: isDark ? '#fff' : '#000',
        bodyColor: isDark ? '#fff' : '#000',
        borderColor: isDark ? '#374151' : '#e5e7eb',
        borderWidth: 1,
        padding: 10,
      },
    },
  };

  return (
    <div className={`${isDark ? 'bg-black border border-gray-800' : 'bg-white'} rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl p-4 sm:p-6 transition-all duration-300 animate-slideUp`} style={{ animationDelay: '0.2s' }}>
      <h2 className={`text-lg sm:text-xl lg:text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-4 sm:mb-6`}>
        Expense Breakdown
      </h2>
      <div className="relative h-56 sm:h-64">
        <Doughnut data={chartData} options={options} />
      </div>
    </div>
  );
};

export default ExpenseBreakdown;
