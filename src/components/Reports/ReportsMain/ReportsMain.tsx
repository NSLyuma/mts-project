import React, { useState } from 'react';
import styles from './ReportsMain.module.css';
import DatePicker, { registerLocale, setDefaultLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-datepicker/dist/react-datepicker.css';
import ru from 'date-fns/locale/ru/index.js';
import ReportsCharts from '../ReportsCharts/ReportsCharts';

registerLocale('ru', ru);
setDefaultLocale('ru');

function ReportsMain(): JSX.Element {
  const [aggregation, setAggregation] = useState<string>('day');
  const [period, setPeriod] = useState<string>('7d');
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());

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
              onClick={(): void => setPeriod('7d')}
            >
              7Д
            </button>

            <button
              className={`${styles.button} ${
                period === '10d' && styles.button_active
              }`}
              onClick={(): void => setPeriod('10d')}
            >
              10Д
            </button>

            <button
              className={`${styles.button} ${
                period === '14d' && styles.button_active
              }`}
              onClick={(): void => setPeriod('14d')}
            >
              14Д
            </button>

            <button
              className={`${styles.button} ${
                period === 'month' && styles.button_active
              }`}
              onClick={(): void => setPeriod('month')}
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

      <ReportsCharts />
    </div>
  );
}

export default ReportsMain;
