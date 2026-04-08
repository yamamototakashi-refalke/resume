import React, { useState } from 'react';
import { RESUME_DATA as DEFAULT_DATA } from './resumeData';
import { ResumeData } from './types';
import { TimelineRedesign } from './components/TimelineRedesign';

const navItems = [
  { id: 'overview', label: '概要' },
  { id: 'experience', label: '職務経歴' },
  { id: 'skills', label: 'スキル' },
  { id: 'strengths', label: '強み' },
  { id: 'selfpr', label: '自己PR' },
];

const AppRedesign: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isEditMode, setIsEditMode] = useState(false);
  const [resumeData, setResumeData] = useState<ResumeData>(DEFAULT_DATA);
  const [jsonInput, setJsonInput] = useState(JSON.stringify(DEFAULT_DATA, null, 2));

  const handlePrint = () => {
    window.print();
  };

  const handleJsonChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const next = e.target.value;
    setJsonInput(next);

    try {
      const parsed = JSON.parse(next) as ResumeData;
      setResumeData(parsed);
    } catch {
      // Keep the last valid data while editing.
    }
  };

  const handleReset = () => {
    const next = JSON.stringify(DEFAULT_DATA, null, 2);
    setJsonInput(next);
    setResumeData(DEFAULT_DATA);
  };

  const scrollTo = (id: string) => {
    setActiveTab(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="page-shell">
      <div className="page-ornament page-ornament-left" />
      <div className="page-ornament page-ornament-right" />

      <header className="topbar no-print">
        <div>
          <p className="eyebrow">Career dossier</p>
          <h1 className="topbar-title">職務経歴書</h1>
        </div>
        <div className="topbar-actions">
          <button
            type="button"
            className={`button button-secondary ${isEditMode ? 'is-active' : ''}`}
            onClick={() => setIsEditMode((prev) => !prev)}
          >
            {isEditMode ? '編集を閉じる' : 'JSONを編集'}
          </button>
          <button type="button" className="button button-primary" onClick={handlePrint}>
            PDF / 印刷
          </button>
        </div>
      </header>

      <div className="workspace">
        {isEditMode && (
          <aside className="editor-panel no-print">
            <div className="editor-panel-head">
              <div>
                <p className="eyebrow">Live editor</p>
                <h2 className="panel-title">Resume JSON</h2>
              </div>
              <button type="button" className="text-button" onClick={handleReset}>
                初期化
              </button>
            </div>
            <textarea
              className="editor-textarea"
              value={jsonInput}
              onChange={handleJsonChange}
              spellCheck={false}
            />
          </aside>
        )}

        <main className="resume-layout">
          <aside className="resume-sidebar no-print">
            <div className="sidebar-card sticky-panel">
              <p className="eyebrow">Navigate</p>
              <nav className="side-nav" aria-label="ページ内ナビゲーション">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    className={`side-nav-link ${activeTab === item.id ? 'is-current' : ''}`}
                    onClick={() => scrollTo(item.id)}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          <div className="resume-paper">
            <section className="hero-panel" id="overview">
              <div className="hero-copy">
                <p className="eyebrow">Professional profile</p>
                <h2 className="hero-name">{resumeData.name}</h2>
                <p className="hero-kana">{resumeData.nameKana}</p>
                <p className="hero-role">{resumeData.role}</p>
                <p className="hero-bio">{resumeData.bio}</p>
              </div>

              <div className="hero-summary-grid">
                <article className="summary-card">
                  <p className="summary-label">年齢</p>
                  <p className="summary-value">{resumeData.age}</p>
                </article>
                <article className="summary-card">
                  <p className="summary-label">性別</p>
                  <p className="summary-value">{resumeData.gender}</p>
                </article>
                <article className="summary-card">
                  <p className="summary-label">IT経験</p>
                  <p className="summary-value">{resumeData.industryExp}</p>
                </article>
                <article className="summary-card">
                  <p className="summary-label">最寄り</p>
                  <p className="summary-value">
                    {resumeData.station.line}
                    <br />
                    {resumeData.station.name}
                  </p>
                </article>
              </div>
            </section>

            <section className="section-grid">
              <div className="section-main">
                <div className="section-block" id="experience">
                  <div className="section-heading">
                    <p className="eyebrow">Experience</p>
                    <h3>職務経歴</h3>
                  </div>
                  <TimelineRedesign experiences={resumeData.experiences} />
                </div>

                <div className="section-block" id="selfpr">
                  <div className="section-heading">
                    <p className="eyebrow">Self promotion</p>
                    <h3>自己PR</h3>
                  </div>
                  <div className="essay-list">
                    {resumeData.selfPr.map((pr, idx) => (
                      <article key={`${pr.title}-${idx}`} className="essay-card">
                        <h4>{pr.title}</h4>
                        <p>{pr.content}</p>
                      </article>
                    ))}
                  </div>
                </div>
              </div>

              <aside className="section-side">
                <div className="section-block info-panel">
                  <div className="section-heading compact">
                    <p className="eyebrow">Profile details</p>
                    <h3>基本情報</h3>
                  </div>
                  <dl className="detail-list">
                    <div>
                      <dt>住所</dt>
                      <dd>{resumeData.address}</dd>
                    </div>
                    <div>
                      <dt>連絡先</dt>
                      <dd>{resumeData.contact.email}</dd>
                    </div>
                    <div>
                      <dt>電話番号</dt>
                      <dd>{resumeData.contact.phone}</dd>
                    </div>
                    <div>
                      <dt>学歴</dt>
                      <dd>{resumeData.education}</dd>
                    </div>
                  </dl>
                </div>

                <div className="section-block info-panel" id="skills">
                  <div className="section-heading compact">
                    <p className="eyebrow">Skill inventory</p>
                    <h3>保有スキル</h3>
                  </div>
                  <div className="skill-groups">
                    {resumeData.skillCategories.map((category) => (
                      <section key={category.category} className="skill-group">
                        <h4>{category.category}</h4>
                        <div className="skill-list">
                          {category.skills.map((skill) => (
                            <div key={skill.name} className="skill-item">
                              <div className="skill-row">
                                <span>{skill.name}</span>
                                <strong>{skill.level}%</strong>
                              </div>
                              <div className="skill-meter" aria-hidden="true">
                                <span style={{ width: `${skill.level}%` }} />
                              </div>
                            </div>
                          ))}
                        </div>
                      </section>
                    ))}
                  </div>
                </div>

                <div className="section-block info-panel" id="strengths">
                  <div className="section-heading compact">
                    <p className="eyebrow">Core strengths</p>
                    <h3>強み</h3>
                  </div>
                  <div className="tag-list">
                    {resumeData.strengths.map((strength) => (
                      <span key={strength} className="tag">
                        {strength}
                      </span>
                    ))}
                  </div>
                </div>
              </aside>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AppRedesign;
