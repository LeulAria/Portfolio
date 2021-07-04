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
          <div className={styles.hero_section}>
            <h1 className={styles.title}>Hi,I&apos;am</h1>
            <h1 className={styles.title}>
              <a>Leul</a>
            </h1>
            <h1 className={styles.title}>Software Engineer</h1>

            <p className={styles.description}>
              Developing fullstack web, mobile and desktop applictions with
              Javascript and Typescript mainly.
            </p>
          </div>
        </div>

        <section
          className={`${styles.section} ${styles.container} ${styles.projects_section}`}
        >
          <div>
            <Fade bottom>
              <h1 className={styles.projects_title}>Personal Projects</h1>
            </Fade>
            <div className={styles.grid}>
              <Fade bottom cascade>
                <div className={styles.card}>
                  <h3>FireQuery</h3>
                  <p>
                    Firequery is a react library which binds firebase to make it
                    easy to work with firebase.
                  </p>
                </div>

                <div className={styles.card}>
                  <h3>React Rolebased Router</h3>
                  <p>
                    Binds react-router for creating an easy to use library for
                    creating and managing routes with role.
                  </p>
                </div>

                <div className={styles.card}>
                  <h3>React Form Aria</h3>
                  <p>
                    A react-hook form library which allows creates material-ui
                    form, from json schema.
                  </p>
                </div>

                <div className={styles.card}>
                  <h3>Remedy</h3>
                  <p>
                    a simple real time chat application for chatting, blogging,
                    sharing ideas and finding friends.
                  </p>
                </div>
              </Fade>
              <button style={{ marginTop: `2rem` }} className={styles.btn}>
                load more
              </button>
            </div>
          </div>
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
