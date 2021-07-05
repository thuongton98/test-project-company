/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import styles from './DashboardLayout.module.scss';

function DashboardLayout({ component: Component, ...rest }) {
  return (
    <div className={styles.app}>
      <Component {...rest} />
    </div>
  );
}

export default DashboardLayout;
