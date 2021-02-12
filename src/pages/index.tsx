import config from 'react-reveal/globals';
import Fade from 'react-reveal/Fade';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

config({ ssrFadeout: true });

export default function Home() {
  return (
    <div>
      <Head>
        <title>LeulAria Portfolio Site | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${styles.main} ${styles.container}`}>
        <div className={styles.fixed_container}>
          <div className={styles.fixed_section}>
            <h1 className={styles.title}>Hi,I'am</h1>
            <h1 className={styles.title}>
              <a href="https://nextjs.org">Leul</a>
            </h1>
            <h1 className={styles.title}>A Software Developer</h1>

            <p className={styles.description}>
              Developing fullstack web, mobile and desktop applictions with
              Javascript and Typescript mainly.
            </p>
          </div>
        </div>

        <section className={styles.section}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#0070f3"
              fill-opacity="1"
              d="M0,224L48,186.7C96,149,192,75,288,64C384,53,480,107,576,117.3C672,128,768,96,864,106.7C960,117,1056,171,1152,170.7C1248,171,1344,117,1392,90.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
          <div className={`${styles.fcontainer} ${styles.grid_bg_blue}`}>
            <div className={styles.grid}>
              <Fade bottom big cascade>
                <div className={styles.card}>
                  <h3>Lorem</h3>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Molestiae, numquam.
                  </p>
                </div>

                <div className={styles.card}>
                  <h3>Lorem, ipsum.</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Unde, exercitationem!
                  </p>
                </div>

                <div className={styles.card}>
                  <h3>Lorem</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
                    hic officia!
                  </p>
                </div>

                <div className={styles.card}>
                  <h3>Lorem, ipsum.</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quidem quo maxime laborum.
                  </p>
                </div>
              </Fade>
            </div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#0070f3"
              fill-opacity="1"
              d="M0,160L80,133.3C160,107,320,53,480,42.7C640,32,800,64,960,85.3C1120,107,1280,117,1360,122.7L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
            ></path>
          </svg>
        </section>
        <section
          className={`${styles.section} ${styles.container}`}
          style={{
            marginTop: '-300px',
            paddingTop: '0px',
            minHeight: '100vh',
            zIndex: 2,
            background: '#111',
          }}
        >
          <Fade bottom big>
            <h1 style={{ fontSize: '3rem', margin: 0 }}>Testimonials</h1>
          </Fade>
        </section>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=typescript-nextjs-starter"
          target="_blank"
          rel="noopener noreferrer"
        >
          &copy; Made By leularia {new Date().getFullYear()}
        </a>
      </footer>
    </div>
  );
}
