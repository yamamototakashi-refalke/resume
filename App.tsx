
import React, { useState, useEffect } from 'react';
import { RESUME_DATA as DEFAULT_DATA } from './constants';
import { Timeline } from './components/Timeline';
import { ResumeData } from './types';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isEditMode, setIsEditMode] = useState(false);
  const [resumeData, setResumeData] = useState<ResumeData>(DEFAULT_DATA);
  const [jsonInput, setJsonInput] = useState(JSON.stringify(DEFAULT_DATA, null, 2));

  const handlePrint = () => {
    window.print();
  };

  const handleJsonChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setJsonInput(e.target.value);
    try {
      const parsed = JSON.parse(e.target.value);
      setResumeData(parsed);
    } catch (err) {
      // Keep existing data if JSON is invalid while typing
    }
  };

  const navItems = [
    { id: 'overview', label: '基本情報', icon: 'person_outline' },
    { id: 'experience', label: '職務経歴', icon: 'work_history' },
    { id: 'skills', label: '保有スキル', icon: 'verified' },
    { id: 'selfpr', label: '自己PR', icon: 'star_outline' },
  ];

  const scrollTo = (id: string) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-100 selection:bg-brand-blue selection:text-white">
      {/* Utility Header (Fixed) 
      <header className="no-print sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 px-6 py-4 flex justify-between items-center h-16">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 text-brand-blue">
            <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path d="M39.5563 34.1455V13.8546C39.5563 15.708 36.8773 17.3437 32.7927 18.3189C30.2914 18.916 27.263 19.2655 24 19.2655C20.737 19.2655 17.7086 18.916 15.2073 18.3189C11.1227 17.3437 8.44365 15.708 8.44365 13.8546V34.1455C8.44365 35.9988 11.1227 37.6346 15.2073 38.6098C17.7086 39.2069 20.737 39.5564 24 39.5564C27.1288 39.5564 30.2914 39.2069 32.7927 38.6098C36.8773 37.6346 39.5563 35.9988 39.5563 34.1455Z"></path>
            </svg>
          </div>
          <h1 className="text-sm font-black tracking-tight text-slate-800 uppercase">IT Professional Career Sheet</h1>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIsEditMode(!isEditMode)}
            className={`flex items-center gap-2 h-10 px-4 rounded-xl text-xs font-black transition-all border ${
              isEditMode ? 'bg-amber-50 border-amber-200 text-amber-700' : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
            }`}
          >
            <span className="material-symbols-outlined !text-[18px]">{isEditMode ? 'close' : 'edit'}</span>
            <span>{isEditMode ? '編集終了' : 'データを編集'}</span>
          </button>
          <button 
            onClick={handlePrint}
            className="flex items-center gap-2 rounded-xl h-10 px-5 bg-brand-blue text-white text-xs font-black hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20 active:scale-95"
          >
            <span className="material-symbols-outlined !text-[18px]">download</span>
            <span>PDF / 印刷</span>
          </button>
        </div>
      </header>*/}

      {/* Main Content Area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Real-time JSON Editor (Drawer) */}
        {isEditMode && (
          <div className="no-print w-[400px] border-r border-slate-200 bg-white flex flex-col animate-in slide-in-from-left duration-300">
            <div className="p-4 border-b border-slate-100 bg-slate-50 flex justify-between items-center">
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">JSON DATA EDITOR</span>
              <button onClick={() => setJsonInput(JSON.stringify(DEFAULT_DATA, null, 2))} className="text-[10px] font-bold text-brand-blue hover:underline">リセット</button>
            </div>
            <textarea
              className="flex-1 p-4 text-[12px] font-mono leading-relaxed focus:outline-none resize-none border-none bg-slate-900 text-emerald-400"
              value={jsonInput}
              onChange={handleJsonChange}
              spellCheck={false}
            />
          </div>
        )}

        <main className="flex-1 p-8 md:p-12 flex justify-center items-start overflow-y-auto bg-slate-100">
          <div className="resume-canvas bg-white shadow-2xl shadow-slate-300/50 w-full max-w-[1100px] flex overflow-hidden border border-slate-200 rounded-2xl min-h-[1400px]">
            
            {/* Left Nav Bar */}
            <nav className="nav-column w-20 md:w-56 border-r border-slate-50 bg-brand-navy py-12 flex flex-col items-center">
              <div className="sticky top-28 w-full px-4 flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollTo(item.id)}
                      className={`flex items-center gap-4 px-4 py-4 rounded-2xl text-[10px] font-black tracking-widest transition-all text-left w-full ${
                        activeTab === item.id 
                        ? 'bg-brand-blue text-white shadow-lg shadow-blue-600/30' 
                        : 'text-slate-400 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <span className="material-symbols-outlined !text-[20px]">{item.icon}</span>
                      <span className="hidden md:block uppercase">{item.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </nav>

            {/* Resume Main Body */}
            <div className="flex-1 p-10 md:p-16 flex flex-col bg-white">
              {/* Header */}
              <header className="mb-14 scroll-mt-24" id="overview">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-black text-brand-blue tracking-[0.4em] uppercase">{resumeData.role}</span>
                    <h2 className="text-5xl font-black text-slate-900 tracking-tighter mt-2">{resumeData.name}</h2>
                    <span className="text-sm font-bold text-slate-400">{resumeData.nameKana}</span>
                  </div>
                  <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 grid grid-cols-2 gap-x-8 gap-y-2">
                    {[
                      { label: "年齢", value: resumeData.age },
                      { label: "IT経験", value: resumeData.industryExp },
                      { label: "最寄駅", value: resumeData.station },
                      { label: "学歴", value: resumeData.education },
                    ].map((item, idx) => (
                      <div key={idx} className="flex flex-col">
                        <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest">{item.label}</span>
                        <span className="text-[12px] font-bold text-slate-700">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="h-1.5 w-16 bg-brand-blue mb-10 rounded-full"></div>
                
                <div className="bg-slate-50/50 p-8 rounded-3xl border border-slate-100">
                  <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-4">職務要約</h3>
                  <p className="text-[15px] text-slate-600 font-semibold leading-[1.9] max-w-3xl">
                    {resumeData.bio}
                  </p>
                </div>
              </header>

              {/* Work History */}
              <section className="scroll-mt-24 mb-20" id="experience">
                <div className="flex items-center gap-6 mb-12">
                  <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-blue whitespace-nowrap">Professional Experience</h3>
                  <div className="flex-1 h-px bg-slate-100"></div>
                </div>
                <Timeline experiences={resumeData.experiences} />
              </section>

              {/* Self PR */}
              <section className="scroll-mt-24" id="selfpr">
                <div className="flex items-center gap-6 mb-12">
                  <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-blue whitespace-nowrap">Self Promotion</h3>
                  <div className="flex-1 h-px bg-slate-100"></div>
                </div>
                <div className="grid grid-cols-1 gap-8">
                  {resumeData.selfPr.map((pr, idx) => (
                    <div key={idx} className="bg-white border-l-4 border-brand-blue p-6 shadow-sm shadow-slate-200/50 rounded-r-2xl">
                       <h4 className="text-[14px] font-black text-slate-900 mb-3 tracking-tight">{pr.title}</h4>
                       <p className="text-[14px] text-slate-600 leading-relaxed font-medium">{pr.content}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Right Aside */}
            <aside className="hidden lg:flex w-[340px] border-l border-slate-50 bg-slate-50/30 p-12 flex-col gap-16 overflow-y-auto">
              {/* Contact */}
              <div className="space-y-8">
                <h3 className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-400">Contact Details</h3>
                <div className="space-y-6">
                  {[
                    { icon: 'alternate_email', value: resumeData.contact.email, label: 'Email' },
                    { icon: 'phone_iphone', value: resumeData.contact.phone, label: 'Phone' },
                    { icon: 'location_on', value: resumeData.contact.location, label: 'Address' },
                  ].map((item, idx) => (
                    <div key={idx} className="flex flex-col gap-1">
                      <div className="flex items-center gap-2 text-[9px] font-black text-slate-300 uppercase tracking-widest mb-1">
                        <span className="material-symbols-outlined !text-[14px]">{item.icon}</span>
                        {item.label}
                      </div>
                      <p className="text-[12px] font-bold text-slate-800 tracking-tight break-all pl-6">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Skills - Categorized */}
              <div className="space-y-12 scroll-mt-24" id="skills">
                <h3 className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-400">Skill Inventory</h3>
                {resumeData.skillCategories.map((cat, cIdx) => (
                  <div key={cIdx} className="space-y-6">
                    <h4 className="text-[11px] font-black text-brand-blue border-b border-brand-blue/10 pb-2 uppercase tracking-wider">{cat.category}</h4>
                    <div className="space-y-6">
                      {cat.skills.map((skill, sIdx) => (
                        <div key={sIdx} className="group">
                          <div className="flex justify-between mb-2 items-end">
                            <span className="text-[11px] font-black text-slate-800 tracking-tight leading-tight">{skill.name}</span>
                            <span className="text-[9px] font-black text-brand-blue">{skill.level}%</span>
                          </div>
                          <div className="w-full h-1 bg-slate-200 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-brand-blue rounded-full transition-all duration-1000 ease-out"
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Strengths Tags */}
              <div className="space-y-6">
                <h3 className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-400">Key Strengths</h3>
                <div className="flex flex-wrap gap-2">
                  {resumeData.strengths.map((str, idx) => (
                    <span key={idx} className="bg-white border border-slate-200 px-3 py-1.5 rounded-lg text-[10px] font-bold text-slate-700 tracking-tight shadow-sm">
                      {str}
                    </span>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </main>
      </div>

      <footer className="no-print p-6 text-center text-slate-400 text-[10px] font-black uppercase tracking-widest">
        &copy; {new Date().getFullYear()} TAKASHI YAMAMOTO PORTFOLIO // BUILT WITH GEMINI & REACT
      </footer>
    </div>
  );
};

export default App;
