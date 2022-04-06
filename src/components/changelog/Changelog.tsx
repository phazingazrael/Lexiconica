import React, { FC } from 'react';
import styles from './Changelog.module.css';

interface ChangelogProps {}

const Changelog: FC<ChangelogProps> = () => (
  <div className={styles.Changelog} data-testid="Changelog">
    Changelog Component
  </div>
);

export default Changelog;
