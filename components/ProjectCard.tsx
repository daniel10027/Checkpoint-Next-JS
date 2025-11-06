import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '@/lib/data';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card">
      <Image
        src={project.image}
        alt={project.title}
        width={640}
        height={360}
        className="cardImg"
      />
      <div className="cardBody">
        <h3 className="cardTitle">{project.title}</h3>
        <p className="cardExcerpt">{project.excerpt}</p>
        <div className="tagRow">
          {project.tags.map((t) => (
            <span key={t} className="tag">
              {t}
            </span>
          ))}
        </div>
        <Link href={`/portfolio/${project.slug}`} className="cardLink">
          Détails →
        </Link>
      </div>
    </article>
  );
}
