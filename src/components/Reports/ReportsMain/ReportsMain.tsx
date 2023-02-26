import React, { useContext, useEffect, useState } from 'react';
import styles from './ReportsMain.module.css';
import DatePicker, { registerLocale, setDefaultLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-datepicker/dist/react-datepicker.css';
import ru from 'date-fns/locale/ru/index.js';
import ReportsCharts from '../ReportsCharts/ReportsCharts';
import {
  getDateAgo,
  getDatesList,
  getDateString,
} from '../../../helpers/datesHelper';
import { ReportsContext } from '../../../store/reportsStore';
import ReportsTable from '../ReportsTable/ReportsTable';

registerLocale('ru', ru);
setDefaultLocale('ru');

export type ProblemsData = {
  date: string;
  problems: number;
};

function ReportsMain(): JSX.Element {
  const [aggregation, setAggregation] = useState<string>('day');
  const [period, setPeriod] = useState<string>('7d');
  const [startDate, setStartDate] = useState<Date>(getDateAgo(new Date(), 6));
  const [endDate, setEndDate] = useState<Date>(new Date());
  const [problemsData, setProblemsData] = useState<ProblemsData[]>([]);

  const { state } = useContext(ReportsContext);

  useEffect(() => {
    if (aggregation === 'day') {
      setProblemsData([]);
      getDatesList(startDate, endDate).map((date) =>
        setProblemsData((prev) => [
          ...prev,
          { date, problems: Math.floor(Math.random() * 10) },
        ]),
      );
    }
  }, [startDate, endDate, state.station.name, aggregation]);

  const setPeriodChart = (period: string, days: number): void => {
    setPeriod(period);
    setProblemsData([]);

    if (aggregation === 'day') {
      getDatesList(getDateAgo(new Date(), days), new Date()).map((date) =>
        setProblemsData((prev) => [
          ...prev,
          { date, problems: Math.floor(Math.random() * 10) },
        ]),
      );
    }

    if (aggregation === 'week') {
      const count = Math.ceil(days / 7);
      const periods = [];

      for (let i = 0; i < count; i++) {
        if (period === '7d') {
          periods[i] = [
            `${getDateString(
              getDateAgo(new Date(), days * (i + 1)),
            )} - ${getDateString(getDateAgo(new Date(), days * i))}`,
          ];
        } else if (period === '14d') {
          periods[i] = [
            `${getDateString(
              getDateAgo(new Date(), Math.ceil(days / 2) * (i + 1) - 1),
            )} - ${getDateString(
              getDateAgo(new Date(), Math.ceil(days / 2) * i),
            )}`,
          ];
        } else {
          periods[i] = [
            `${getDateString(
              getDateAgo(new Date(), Math.floor(days / 4) * (i + 1) - 1),
            )} - ${getDateString(
              getDateAgo(new Date(), Math.floor(days / 4) * i),
            )}`,
          ];
        }
      }

      periods.reverse().map((period) =>
        setProblemsData((prev) => [
          ...prev,
          {
            date: period[0],
            problems: Math.floor(Math.random() * 20),
          },
        ]),
      );
    }

    if (aggregation === 'month') {
      setProblemsData((prev) => [
        ...prev,
        {
          date: `${getDateString(getDateAgo(new Date(), 31))} - ${getDateString(
            new Date(),
          )}`,
          problems: Math.floor(Math.random() * 10),
        },
      ]);
    }
  };

  const setAggregationChart = (aggregation: string): void => {
    setAggregation(aggregation);
    setPeriod('7d');
    setProblemsData([]);

    setTimeout(() => {
      if (aggregation === 'day') {
        getDatesList(getDateAgo(new Date(), 6), new Date()).map((date) =>
          setProblemsData((prev) => [
            ...prev,
            { date, problems: Math.floor(Math.random() * 10) },
          ]),
        );
      }

      if (aggregation === 'week') {
        const count = Math.ceil(6 / 7);
        const periods = [];

        for (let i = 0; i < count; i++) {
          if (period === '7d') {
            periods[i] = [
              `${getDateString(
                getDateAgo(new Date(), 6 * (i + 1)),
              )} - ${getDateString(getDateAgo(new Date(), 6 * i))}`,
            ];
          } else if (period === '14d') {
            periods[i] = [
              `${getDateString(
                getDateAgo(new Date(), Math.ceil(13 / 2) * (i + 1) - 1),
              )} - ${getDateString(
                getDateAgo(new Date(), Math.ceil(13 / 2) * i),
              )}`,
            ];
          } else {
            periods[i] = [
              `${getDateString(
                getDateAgo(new Date(), Math.floor(31 / 4) * (i + 1) - 1),
              )} - ${getDateString(
                getDateAgo(new Date(), Math.floor(31 / 4) * i),
              )}`,
            ];
          }
        }

        periods.reverse().map((period) =>
          setProblemsData((prev) => [
            ...prev,
            {
              date: period[0],
              problems: Math.floor(Math.random() * 20),
            },
          ]),
        );
      } else {
        setProblemsData((prev) => [
          ...prev,
          {
            date: `${getDateString(
              getDateAgo(new Date(), 31),
            )} - ${getDateString(new Date())}`,
            problems: Math.floor(Math.random() * 10),
          },
        ]);
      }
    });
  };

  return (
    <div className={styles.main}>
      <div className={styles.head}>
        <div className={styles.choice}>
          <p className={styles.text}>Агрегация</p>

          <div className={styles.choice_box}>
            <button
              className={`${styles.button} ${
                aggregation === 'day' && styles.button_active
              }`}
              onClick={(): void => setAggregationChart('day')}
            >
              День
            </button>

            <button
              className={`${styles.button} ${
                aggregation === 'week' && styles.button_active
              }`}
              onClick={(): void => {
                setAggregationChart('week');
                setPeriod('7d');
              }}
            >
              Неделя
            </button>

            <button
              className={`${styles.button} ${
                aggregation === 'month' && styles.button_active
              }`}
              onClick={(): void => {
                setAggregationChart('month');
                setPeriod('month');
              }}
            >
              Месяц
            </button>
          </div>
        </div>

        <div className={styles.choice}>
          <p className={styles.text}>Период</p>

          <div className={styles.choice_box}>
            <button
              className={`${styles.button} ${
                period === '7d' && styles.button_active
              }`}
              onClick={(): void => setPeriodChart('7d', 6)}
              disabled={aggregation === 'month'}
            >
              7Д
            </button>

            <button
              className={`${styles.button} ${
                period === '10d' && styles.button_active
              }`}
              onClick={(): void => setPeriodChart('10d', 9)}
              disabled={aggregation === 'week' || aggregation === 'month'}
            >
              10Д
            </button>

            <button
              className={`${styles.button} ${
                period === '14d' && styles.button_active
              }`}
              onClick={(): void => setPeriodChart('14d', 13)}
              disabled={aggregation === 'month'}
            >
              14Д
            </button>

            <button
              className={`${styles.button} ${
                period === 'month' && styles.button_active
              }`}
              onClick={(): void => setPeriodChart('month', 31)}
            >
              Мес
            </button>

            <div
              className={`${styles.button} ${
                period === 'custom' && styles.button_active
              } ${styles.button_custom}`}
              onClick={(): void => {
                setPeriod('custom');
                setAggregation('day');
              }}
            >
              <span className={styles.button_text}>Свой:</span>

              <DatePicker
                className={`${styles.button} ${
                  period === 'custom' && styles.button_active
                } ${styles.picker}`}
                locale={ru}
                dateFormat="dd.MM.yyyy"
                selected={startDate}
                onChange={(date: Date): void => setStartDate(date)}
                selectsStart
                startDate={startDate}
                endDate={endDate}
              />

              <span className={styles.button_divider}>-</span>

              <DatePicker
                className={`${styles.button} ${
                  period === 'custom' && styles.button_active
                } ${styles.picker}`}
                locale={ru}
                dateFormat="dd.MM.yyyy"
                selected={endDate}
                onChange={(date: Date): void => setEndDate(date)}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
              />
            </div>
          </div>
        </div>
      </div>

      {state.station.isOpenCharts ? (
        <div className={styles.data}>
          <ReportsCharts problemsData={problemsData} station={state.station} />
          <ReportsTable station={state.station.name} />
        </div>
      ) : (
        ''
      )}
    </div>
  );
}

export default ReportsMain;
