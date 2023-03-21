import styles from '../styles/Home.module.css';
import QuoteGenerator from './QuoteGenerator';
// const axios = require('axios').default;

function Home() {
  return (
    <div>
      <main className={styles.main}>
        <QuoteGenerator/>
      </main>
    </div>
  );
}

export default Home;
