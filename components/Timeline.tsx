
import React from 'react';
import { Experience } from '../types';

interface TimelineProps {
  experiences: Experience[];
}

export const Timeline: React.FC<TimelineProps> = ({ experiences }) => {
  return (
    <div className="relative ml-1 border-l border-slate-200 pl-8 space-y-16 py-2">
      {experiences.map((exp) => (
        <div key={exp.id} className="relative">
          {/* Timeline Dot */}
          <div className={`absolute -left-[36.5px] top-2 size-4 rounded-full border-4 border-white z-10 ${exp.isCurrent ? 'bg-brand-blue' : 'bg-slate-400'}`}></div>
          
          <div className="flex flex-col md:flex-row justify-between items-start mb-6 gap-2">
            <div>
              <h4 className="text-xl font-black text-slate-900 leading-tight">{exp.title}</h4>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-slate-500 font-bold text-[11px] mt-2">
                <div className="flex items-center gap-1.5 bg-slate-100 text-slate-700 px-2 py-0.5 rounded">
                  <span className="material-symbols-outlined !text-[14px]">person</span>
                  <span>役割: {exp.roleInExp}</span>
                </div>
                {exp.scaleInExp && (
                  <div className="flex items-center gap-1.5 bg-slate-100 text-slate-700 px-2 py-0.5 rounded">
                    <span className="material-symbols-outlined !text-[14px]">groups</span>
                    <span>規模: {exp.scaleInExp}</span>
                  </div>
                )}
                {exp.osInExp && (
                  <div className="flex items-center gap-1.5 bg-slate-100 text-slate-700 px-2 py-0.5 rounded">
                    <span className="material-symbols-outlined !text-[14px]">terminal</span>
                    <span>OS: {exp.osInExp}</span>
                  </div>
                )}
              </div>
            </div>
            <span className="text-[10px] font-black tracking-widest text-slate-400 bg-slate-50 px-3 py-2 rounded-lg border border-slate-100 whitespace-nowrap">
              {exp.period}
            </span>
          </div>
          
          <p className="text-[14px] text-slate-600 font-medium mb-8 leading-relaxed border-l-2 border-brand-blue/20 pl-4">
            {exp.summary}
          </p>

          {exp.projects && exp.projects.length > 0 && (
            <div className="space-y-6">
              {exp.projects.map((project, pIdx) => (
                <div key={pIdx} className="bg-slate-50/50 rounded-2xl p-6 border border-slate-100 relative group hover:border-brand-blue/30 transition-colors">
                   <div className="flex justify-between items-start mb-3">
                      <h5 className="text-[13px] font-black text-slate-800 tracking-tight flex items-center gap-2">
                        <span className="size-1.5 rounded-full bg-brand-blue"></span>
                        {project.name}
                      </h5>
                      <span className="text-[10px] font-bold text-slate-400">{project.period}</span>
                   </div>
                   <div className="text-[11px] font-bold text-brand-blue/80 mb-3 uppercase tracking-wider">{project.role}</div>
                   <p className="text-[13px] text-slate-600 leading-[1.7] mb-4 whitespace-pre-wrap">
                     {project.description}
                   </p>
                   <div className="flex flex-wrap gap-2">
                     {project.technologies.map((tech, tIdx) => (
                       <span key={tIdx} className="text-[9px] font-black bg-white text-slate-500 px-2 py-1 rounded border border-slate-100 uppercase tracking-tighter shadow-sm">
                         {tech}
                       </span>
                     ))}
                   </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
