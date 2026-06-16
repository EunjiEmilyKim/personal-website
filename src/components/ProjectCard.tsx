
"use client";

import { useState } from "react";

type ResearchItem = {
  title: string;
  status: string;
  abstract: string;
  collaborators?: string;
};

type Project = {
  title: string;
  description: string;
  collaborators?: string;
  items: ResearchItem[];
};

export default function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);
  const [openItem, setOpenItem] = useState<string | null>(null);

  return (
    <article className="border-t border-neutral-200 py-7">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-start justify-between gap-6 text-left"
      >
        <div>
          <h3 className="text-2xl font-medium tracking-tight">
            {project.title}
          </h3>
          <p className="mt-3 max-w-6xl leading-7 text-neutral-700">
            {project.description}
          </p>
          {project.collaborators && (
            <p className="mt-3 text-sm text-neutral-500">
              Collaborators: {project.collaborators}
            </p>
          )}
        </div>

        <span className="text-2xl text-neutral-400">{open ? "−" : "+"}</span>
      </button>

      {open && (
        <div className="mt-7">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.18em] text-neutral-500">
            {project.items.length} works
          </p>

          <div className="space-y-4">
            {project.items.map((item) => {
              const itemOpen = openItem === item.title;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-neutral-200 bg-white p-5"
                >
                  <button
                    onClick={() =>
                      setOpenItem(itemOpen ? null : item.title)
                    }
                    className="flex w-full items-start justify-between gap-6 text-left"
                  >
                    <div>
                      <p className="text-sm text-neutral-500">{item.status}</p>
                      <h4 className="mt-2 text-lg font-medium leading-7">
                        {item.title}
                      </h4>
                      {item.collaborators && (
                        <p className="mt-2 text-sm text-neutral-500">
                          Collaborator: {item.collaborators}
                        </p>
                      )}
                    </div>

                    <span className="text-xl text-neutral-400">
                      {itemOpen ? "−" : "+"}
                    </span>
                  </button>

                  {itemOpen && (
                    <p className="mt-5 border-t border-neutral-100 pt-5 leading-7 text-neutral-700">
                      {item.abstract}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </article>
  );
}