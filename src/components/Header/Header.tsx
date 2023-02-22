import React from 'react';
import { user } from '../../data/mockData';
import styles from './Header.module.css';
import '../../styles/index.css';

type Props = {
  page: string;
  setPage: React.Dispatch<React.SetStateAction<string>>;
};

function Header({ page, setPage }: Props): JSX.Element {
  const { firstName, secondName } = user;

  return (
    <header className={`${styles.header} container`}>
      <div className={styles.left}>
        <div className={styles.logo}>
          <img
            className={styles.logo_img}
            src="img/logo-icon.png"
            alt="картинка логотипа"
          />
          <span>МТС</span>
          <span>Метро</span>
        </div>

        <nav>
          <button
            className={`${styles.page} ${
              page === 'reports' && styles.page_active
            }`}
            onClick={(): void => setPage('reports')}
          >
            Отчеты
          </button>
          <button
            className={`${styles.page} ${
              page === 'analysis' && styles.page_active
            }`}
            onClick={(): void => setPage('analysis')}
          >
            Анализ
          </button>
        </nav>
      </div>

      <div>
        {firstName[0]}
        {secondName[0]}
      </div>
    </header>
  );
}

export default Header;
