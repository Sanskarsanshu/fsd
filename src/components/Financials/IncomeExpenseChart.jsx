import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const IncomeExpenseChart = ({ data }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: 'Income',
        data: data.income,
        borderColor: '#10b981',
        backgroundColor: isDark ? 'rgba(16, 185, 129, 0.2)' : 'rgba(16, 185, 129, 0.1)',
        borderWidth: 3,
        fill: true,
        tension: 0.4,
        pointRadius: 6,
        pointBackgroundColor: '#10b981',
        pointBorderColor: isDark ? '#000' : '#fff',
        pointBorderWidth: 2,
        pointHoverRadius: 8,
      },
      {
        label: 'Expenses',
        data: data.expenses,
        borderColor: '#ef4444',
        backgroundColor: isDark ? 'rgba(239, 68, 68, 0.2)' : 'rgba(239, 68, 68, 0.1)',
        borderWidth: 3,
        fill: true,
        tension: 0.4,
        pointRadius: 6,
        pointBackgroundColor: '#ef4444',
        pointBorderColor: isDark ? '#000' : '#fff',
        pointBorderWidth: 2,
        pointHoverRadius: 8,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          usePointStyle: true,
          padding: 15,
          font: { 
            size: window.innerWidth < 640 ? 11 : 14, 
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
        padding: 12,
        displayColors: true,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)',
          drawBorder: false,
        },
        ticks: {
          callback: (value) => `₹${(value / 1000).toFixed(0)}k`,
          color: isDark ? '#9ca3af' : '#6b7280',
          font: { size: window.innerWidth < 640 ? 10 : 12 },
        },
      },
      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          color: isDark ? '#9ca3af' : '#6b7280',
          font: { size: window.innerWidth < 640 ? 10 : 12 },
        },
      },
    },
  };

  return (
    <div className={`${isDark ? 'bg-black border border-gray-800' : 'bg-white'} rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl p-4 sm:p-6 transition-all duration-300 animate-slideUp`} style={{ animationDelay: '0.1s' }}>
      <h2 className={`text-lg sm:text-xl lg:text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-4 sm:mb-6`}>
        Income vs Expenses
      </h2>
      <p className={`text-xs sm:text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-4`}>
        Last 6 Months
      </p>
      <div className="relative h-64 sm:h-72 lg:h-80">
        <Line data={chartData} options={options} />
      </div>
    </div>
  );
};

export default IncomeExpenseChart;
