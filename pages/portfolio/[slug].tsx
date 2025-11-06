import Layout from '@/components/Layout';
import Image from 'next/image';
import { GetStaticPaths, GetStaticProps } from 'next';


export const getStaticPaths: GetStaticPaths = async () => {
  const paths = projects.map((p) => ({ params: { slug: p.slug } }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const project = projects.find((p) => p.slug === params?.slug);
  return { props: { project } };
};

export default function ProjectDetail({ project }: { project: (typeof projects)[number] }) {
  return (
    <Layout title={`${project.title} — Projet`} description={project.excerpt}>
      <h1>{project.title}</h1>
      <p><strong>Tags:</strong> {project.tags.join(', ')}</p>
      <div style={{ margin: '16px 0' }}>
        <Image src={project.image} alt={project.title} width={900} height={506} />
      </div>
      <p>{project.description}</p>
      {project.links?.length ? (
        <p style={{ marginTop: 12 }}>
          <strong>Liens:</strong>{' '}
          {project.links.map((l, i) => (
            <a key={i} href={l.href} target='_blank' rel='noreferrer' style={{ marginRight: 12 }}>
              {l.label} ↗
            </a>
          ))}
        </p>
      ) : null}
    </Layout>
  );
}