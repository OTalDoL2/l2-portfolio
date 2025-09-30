'use client'

import { useParams } from 'next/navigation';
import { myProjects } from '../data';

export default function ProjectPage() {
  const params = useParams();
  const slug = params.slug;

  const project = myProjects.find((p) => p.slug === slug);

  if (!project) {
    return <div>Projeto não encontrado</div>;
  }

  return (
    <div>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
    </div>
  );
}
