'use client'

import { useParams } from 'next/navigation';
import { myProjects } from '../data';

import { useState } from "react";
import Main from '@/components/Project/Main';
import Board from '@/components/Tech/Board';
import About from '@/components/Project/About';

export default function ProjectPage() {
  const params = useParams();
  const slug = params.slug;

  const project = myProjects.find((p) => p.slug === slug);


  if (!project) {
    return <div>Projeto não encontrado</div>;
  }

  const tabs = [
    { id: 1, label: "Visão Geral", color: project.theme[0] },
    { id: 2, label: "Sobre o Projeto", color: project.theme[1] },
    { id: 3, label: "Tecnologias", color: project.theme[2] }
  ];

  console.log(tabs)

  const [active, setActive] = useState(1);


  return (
    <div className="flex p-8 h-140 w100 align-center justify-center">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-2">
        {tabs.slice(0, Math.ceil(tabs.length)).map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            className={`px-4 py-2 rounded-l-full text-white font-bold transition ${active === tab.id ? tab.color : "bg-gray-400"}`}

          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="flex-1 flex items-center justify-center">
        {active === 1 && (
          <Main project={project} />

        )}
        {active === 2 && (
          <div className="text-center">
            <About project={project} />
          </div>
        )}
        {active === 3 && (
          <div className="text-center">
            <Board key={project.id} technologies={project.tech} />
          </div>
        )}
      </div>
    </div >
  );
}
