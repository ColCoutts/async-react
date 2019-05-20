import React from 'react';
import styles from './Loading.css';
import spinner from '../assets/spinner.jpeg';

export default function Loader() {
  return <img className={styles.Loader} src={spinner} />;
}
