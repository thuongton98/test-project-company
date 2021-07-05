import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFoundScreen.module.scss';

class NotFoundScreen extends PureComponent {
  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.face}>
          <div className={styles.band}>
            <div className={styles.red} />
            <div className={styles.white} />
            <div className={styles.blue} />
          </div>
          <div className={styles.eyes} />
          <div className={styles.dimples} />
          <div className={styles.mouth} />
        </div>

        <h1 className={styles.h1}>おっと！ページが見つかりません！</h1>
        <div className={styles.btn}><Link style={{ color: '#fff', textDecoration: 'none' }} to="/home/services">家に帰る</Link></div>
      </div>
    );
  }
}

export default NotFoundScreen;
