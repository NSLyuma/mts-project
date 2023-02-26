import React, { useContext, useState } from 'react';
import styles from './ReportsMain.module.css';
import DatePicker, { registerLocale, setDefaultLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-datepicker/dist/react-datepicker.css';
import ru from 'date-fns/locale/ru/index.js';
import ReportsCharts from '../ReportsCharts/ReportsCharts';
import { getDateAgo, getDatesList } from '../../../helpers/datesHelper';
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

  const { state } = useContext(ReportsContext);

  const problemsData: ProblemsData[] = [];

  getDatesList(startDate, endDate).map((date) =>
    problemsData.push({
      date,
      problems: Math.floor(Math.random() * 10),
    }),
  );

  const setPeriodChart = (period: string, days: number): void => {
    setPeriod(period);
    setEndDate(new Date());
    setStartDate(getDateAgo(endDate, days));
    getDatesList(startDate, endDate).map((date) =>
      problemsData.push({
        date,
        problems: Math.floor(Math.random() * 10),
      }),
    );
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
              onClick={(): void => setAggregation('day')}
            >
              День
            </button>

            <button
              className={`${styles.button} ${
                aggregation === 'week' && styles.button_active
              }`}
              onClick={(): void => setAggregation('week')}
            >
              Неделя
            </button>

            <button
              className={`${styles.button} ${
                aggregation === 'month' && styles.button_active
              }`}
              onClick={(): void => setAggregation('month')}
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
            >
              7Д
            </button>

            <button
              className={`${styles.button} ${
                period === '10d' && styles.button_active
              }`}
              onClick={(): void => setPeriodChart('10d', 9)}
            >
              10Д
            </button>

            <button
              className={`${styles.button} ${
                period === '14d' && styles.button_active
              }`}
              onClick={(): void => setPeriodChart('14d', 13)}
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
              onClick={(): void => setPeriod('custom')}
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
