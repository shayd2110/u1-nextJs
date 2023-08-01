/* eslint-disable react/no-unknown-property */
import type { NextPage } from 'next';
import { useEffect } from 'react';
import { ButtonHTMLAttributes } from 'react';
import styles from './Home.module.css';

const Button = (props: ButtonHTMLAttributes<HTMLDivElement>) => {
  return <div {...props} className={styles.button} u1-button="" />;
};

const Home: NextPage = () => {
  return (
    <div>
      <Button onClick={() => alert('Hello world')}>Click Me!</Button>
    </div>
  );
};

export default Home;
