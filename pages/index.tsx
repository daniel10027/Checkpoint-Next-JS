
import Layout from '@/components/Layout';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import Link from 'next/link';             

export default function Home() {
  return (
    <Layout title='Accueil — Portfolio de Daniel' description='Portfolio Next.js de Jean Marie Daniel Vianney Guedegbe'>
      <section className={styles.hero}>
        <div>
          <h1 className={styles.title}>Software Engineer</h1>
          <p className={styles.lead}>
            Développeur Full Stack Python & JavaScript avec plus de 6 ans d’expérience (Django, FastAPI, Next.js, Flutter).
            J’interviens sur toute la chaîne : APIs, UI, IoT, CI/CD, cloud & déploiement. Leader technique en Agile, je
            transforme les besoins métiers en solutions performantes et scalables.
          </p>
          <div className={styles.ctas}>
            <Link className={styles.btnPrimary} href="/portfolio">
              Voir mes projets
            </Link>
            <Link className={styles.btnGhost} href="/contact">
              Me contacter
            </Link>
          </div>
        </div>
        <div className={styles.avatarWrap}>
          <Image src='/daniel.jpeg' alt='Photo de Daniel' width={300} height={300} priority />
        </div>
      </section>
    </Layout>
  );
}