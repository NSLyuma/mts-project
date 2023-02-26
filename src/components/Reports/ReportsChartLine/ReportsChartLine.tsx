import React from 'react';
import styles from './ReportsChartLine.module.css';
import {
  Chart as ChartJSLine,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { ChartData, ChartOptions } from 'chart.js';
import { Characteristic } from '../../../data/types';

type Props = {
  characteristic: Characteristic;
};

ChartJSLine.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

ChartJSLine.defaults.font.size = 12;

const colors = ['#E40510', '#E87F1D', '#93003E', '#03AA3D', '#C1ED1A'];

function ReportsChartLine({ characteristic }: Props): JSX.Element {
  const options: ChartOptions<'line'> = {
    responsive: false,
    interaction: {
      intersect: false,
    },
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          useBorderRadius: true,
          borderRadius: 4,
          boxWidth: 10,
          boxHeight: 10,
          color: '#000',
          font: { size: 10 },
        },
      },
      datalabels: {
        display: false,
      },
    },
  };

  const labels = characteristic.properties[0].options[0].values.map(
    (_, i) => i + 1,
  );

  const datasets = characteristic.properties
    .map((prop) =>
      prop.options.map((opt, i) => ({
        label: opt.name,
        // data: opt.values
        data: labels.map(() => Number(Math.random().toFixed(2))),
        tension: 0.4,
        borderWidth: 1,
        pointBorderWidth: 0,
        pointBackgroundColor: 'transparent',
      })),
    )
    .flat(1)
    .map((item, i) => ({
      ...item,
      borderColor: colors[i],
      backgroundColor: colors[i],
    }));

  const data: ChartData<'line'> = {
    labels,
    datasets,
  };

  return (
    <div className={styles.chart}>
      <p className={styles.chart_title}>{characteristic.name}</p>
      <Line options={options} data={data} width={250} height={200} />
    </div>
  );
}

export default ReportsChartLine;
