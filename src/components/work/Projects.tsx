import { getPosts } from '@/utils/utils';
import { ProjectCard } from '../ProjectCard';

interface ProjectsProps {
  range?: [number, number?];
  variant?: 'home' | 'grid'; // <-- add this
}

type Project = {
  slug: string;
  metadata: {
    title: string;
    summary: string;
    publishedAt: string;
    link?: string;
    images?: string[];
    tags?: string[];
    [key: string]: any;
  };
  [key: string]: any;
};

export function Projects({ range, variant = 'grid' }: ProjectsProps) {
  let allProjects: Project[] = getPosts(['src', 'app', 'work', 'projects']);

  const sortedProjects = allProjects.sort((a, b) => {
    return (
      new Date(b.metadata.publishedAt).getTime() -
      new Date(a.metadata.publishedAt).getTime()
    );
  });

  const displayedProjects = range
    ? sortedProjects.slice(range[0] - 1, range[1] ?? sortedProjects.length)
    : sortedProjects;

  return (
    <div
      style={{
        display: variant === 'home' ? 'block' : 'grid',
        gridTemplateColumns:
          variant === 'home'
            ? undefined
            : 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '1rem',
        padding: '0 1rem',
        marginBottom: '32px',
      }}
    >
      {displayedProjects.map((post: Project) => (
        <div
          key={post.slug}
          style={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <ProjectCard
            href={`work/${post.slug}`}
            title={post.metadata.title}
            description={post.metadata.summary}
            link={post.metadata.link || ''}
            image={post.metadata.images?.[0] || ''}
            tags={post.metadata.tags || []}
            variant={variant} // 👈 Pass it to ProjectCard
          />
        </div>
      ))}
    </div>
  );
}
