import styles from '@/styles/Projects.module.css';
import type { GetServerSideProps } from 'next';
import { projects as projectsData } from '@/lib/data';
import type { Project } from '@/lib/data';
import Layout from '@/components/Layout';
import ProjectCard from '@/components/ProjectCard';

type PortfolioProps = {
  projects: Project[];
};

export const getServerSideProps: GetServerSideProps<PortfolioProps> = async () => {
  return { props: { projects: projectsData } };
};

export default function Portfolio({ projects }: PortfolioProps) {
  return (
    <Layout title="Portfolio — Daniel" description="Mes projets">
      <h1>Portfolio</h1>
      <p>Quelques projets sélectionnés (web, mobile, backend, SaaS).</p>
      <div className={styles.grid}>
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </Layout>
  );
}