'use client';

import { useState } from "react";
import Main from '@/components/Project/Main';
import Board from '@/components/Tech/Board';
import About from '@/components/Project/About';
import { Project } from "@/app/[locale]/projects/types";

interface Props {
  project: Project;
}

export default function SelectedProjectPage({ project }: Props) {
  const tabs = [
    { id: 1, label: "Visão Geral", color: project.theme[0] },
    { id: 2, label: "Sobre o Projeto", color: project.theme[1] },
    { id: 3, label: "Tecnologias", color: project.theme[2] },
  ];

  const [active, setActive] = useState(1);

  return (
    <div className="relative flex flex-col md:flex-row items-center justify-center w-full min-h-screen p-4 md:p-8 lg:min-h-[85vh]">
      <div className="flex md:hidden w-full justify-center">
        <div className="flex flex-wrap justify-center gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={`px-4 py-2 rounded-full text-white font-semibold transition ${
                active === tab.id ? tab.color : "bg-gray-400"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center w-full">
        {active === 1 && <Main project={project} />}
        {active === 2 && <About project={project} />}
        {active === 3 && <Board key={project.id} technologies={project.tech} />}
      </div>

      <div className="hidden md:flex flex-col gap-2 absolute right-0 top-1/2 -translate-y-1/2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            className={`px-4 py-2 rounded-l-full text-white font-bold transition ${
              active === tab.id
                ? tab.color
                : "bg-gray-400 hover:bg-gray-500"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}
