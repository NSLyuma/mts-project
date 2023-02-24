import React from 'react';
import styles from './ReportsCharts.module.css';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { ProblemsData } from '../ReportsMain/ReportsMain';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

type Props = {
  problemsData: ProblemsData[];
};

function ReportsCharts({ problemsData }: Props): JSX.Element {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
    },
  };

  const data = {
    labels: problemsData.map((item: ProblemsData) => item.date),
    datasets: [
      {
        label: '',
        data: problemsData.map((item) => item.problems),
        backgroundColor: '#C7E8F3',
      },
    ],
  };

  return (
    <div className={styles.charts}>
      <div className={styles.charts_top}>
        <Bar options={options} data={data} />
      </div>
      <div className={styles.charts_bottom}></div>
    </div>
  );
}

export default ReportsCharts;
