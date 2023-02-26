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
import { ChartOptions } from 'chart.js';
import { ProblemsData } from '../ReportsMain/ReportsMain';
import { StationData } from '../../../helpers/reportsStore';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import ReportsChartsList from '../ReportsChartsList/ReportsChartsList';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels,
);

// глобально изменить шрифт графика
ChartJS.defaults.font.size = 12;
ChartJS.defaults.font.family = 'Roboto';

type Props = {
  problemsData: ProblemsData[];
  station: StationData;
};

function ReportsCharts({ problemsData, station }: Props): JSX.Element {
  const maxProblemsValue = Math.max.apply(
    null,
    problemsData.map((item) => item.problems),
  );

  const options: ChartOptions<'bar'> = {
    plugins: {
      tooltip: {
        enabled: false,
      },
      legend: {
        display: false,
      },
      datalabels: {
        color: problemsData.map((item) =>
          item.problems === maxProblemsValue ? '#000' : '#8E9196',
        ),
        anchor: 'end',
        align: 270,
      },
    },
    responsive: true,
    scales: {
      y: {
        min: 0,
        max: maxProblemsValue + 2,
      },
    },
  };

  const data = {
    labels: problemsData.map((item: ProblemsData) => item.date),
    datasets: [
      {
        data: problemsData.map((item) => item.problems),
        // выделяет максимальные значения другим цветом
        backgroundColor: problemsData.map((item) =>
          item.problems === maxProblemsValue ? '#1ABBEC' : '#C7E8F3',
        ),
        borderColor: problemsData.map((item) =>
          item.problems === maxProblemsValue ? '#000' : 'transparent',
        ),
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <div className={styles.bar}>
        <p className={styles.bar_title}>
          График проблемных объектов: {station.name}
        </p>

        <Bar
          className={styles.bar_chart}
          height={'70px'}
          options={options}
          plugins={[ChartDataLabels]}
          data={data}
        />
      </div>

      <div className={styles.lines}>
        <ReportsChartsList />
      </div>
    </>
  );
}

export default ReportsCharts;
