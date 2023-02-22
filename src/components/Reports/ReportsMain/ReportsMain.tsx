import React, { useState } from 'react';
import styles from './ReportsMain.module.css';

function ReportsMain(): JSX.Element {
  const [aggregation, setAggregation] = useState<string>('day');
  const [period, setPeriod] = useState<string>('7d');

  return (
    <div className={styles.main}>
      <div className={styles.head}>
        <div className={styles.choice}>
          <p className={styles.text}>Агрегация</p>

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

        <div className={styles.choice}>
          <p className={styles.text}>Период</p>

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

          <button
            className={`${styles.button} ${
              period === 'custom' && styles.button_active
            }`}
            onClick={(): void => setPeriod('custom')}
          >
            Свой
          </button>
        </div>
      </div>
    </div>
  );
}

export default ReportsMain;
