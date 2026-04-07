import { ResumeData } from './types';

export const RESUME_DATA: ResumeData = {
  name: '山本 孝',
  nameKana: 'やまもと たかし',
  age: '38歳',
  gender: '男性',
  address: '埼玉県所沢市',
  station: {
    line: '西武新宿線',
    name: '新所沢駅',
  },
  industryExp: '17年目',
  education: '大学卒業',
  role: '社内SE / PMO / システム導入 / 業務自動化',
  bio: 'IT業界で16年以上の経験を持つ社内SE。プロジェクトマネジメント、システム導入、運用改善、業務自動化まで一貫して担当してきました。大規模組織でのIT資産管理やMicrosoft 365を中心としたクラウド移行、AI活用による業務効率化に強みがあります。Python、JavaScript、VBAを用いた自動化ツール開発も継続して行い、日々の現場改善につなげています。',
  contact: {
    email: 'yamamoto.takashi@refalke.co.jp',
    phone: '070-4445-8958',
    location: '埼玉県所沢市',
  },
  experiences: [
    {
      id: 'proj-1',
      title: 'サポートデスク室の運用設計・業務改善・PMO業務',
      period: '2024年4月 - 2026年3月予定',
      isCurrent: true,
      roleInExp: 'メンバー',
      scaleInExp: 'チーム6名 / 全体1000名規模',
      osInExp: 'Windows 10 / Windows 11',
      summary: 'システム戦略策定、Windows 11移行、パスワードマネージャー移行など複数のIT刷新プロジェクトに従事。AI活用による業務自動化も継続的に推進。',
      projects: [
        {
          name: 'ITインフラ刷新プロジェクト',
          role: 'PMO / システム導入支援',
          period: '2024年4月 - 継続中',
          description: 'Windows 11 / 25H2移行、SASE移行、M365ライセンス管理、AI活用による業務自動化ツールの実装を担当。',
          technologies: ['M365', 'Azure', 'CATO', 'Python', 'n8n', 'Power Automate', 'Claude', 'Gemini', 'Copilot'],
          scale: '1000名規模',
          os: 'Windows 11',
        },
      ],
    },
    {
      id: 'proj-2',
      title: 'サポートデスク室の運用設計・業務改善・PMO業務',
      period: '2023年10月 - 2024年3月',
      isCurrent: false,
      roleInExp: 'PMO / PL',
      scaleInExp: 'チーム10名 / 全体3000名規模',
      osInExp: 'Windows 10 / Windows 11',
      summary: 'リーダーとしてメンバーの業務を取りまとめ、進捗管理、課題管理、会議ファシリテーションを担当。',
      projects: [
        {
          name: '業務効率化改善プロジェクト',
          role: 'PL',
          period: '2023年10月 - 2024年3月',
          description: 'システム戦略策定、会議資料作成、関係者調整を通じて3000名規模組織の業務改善をリード。',
          technologies: ['Jira', 'Asana', 'Power Automate', 'Office Scripts', 'Figma'],
          scale: '3000名規模',
        },
      ],
    },
    {
      id: 'proj-3',
      title: 'チーム運営・進捗管理・運用業務',
      period: '2021年2月 - 2023年8月',
      isCurrent: false,
      roleInExp: 'PL',
      scaleInExp: 'チーム6名 / 全体40名',
      osInExp: 'macOS / iPadOS / Ubuntu / Linux',
      summary: 'Apple製品の大規模キッティング、船舶監視カメラ向けIoTデバイス運用、障害対応の標準化を推進。',
      projects: [
        {
          name: 'マルチプラットフォーム資産管理',
          role: 'PL',
          period: '2021年2月 - 2023年8月',
          description: 'iPad / Macのキッティング、Ubuntuデバイスの選定と運用、BigQueryによるデータ抽出、サポート標準化を担当。',
          technologies: ['ABM', 'BizMobile', 'GCP', 'BigQuery', 'Ubuntu', 'OpenSSH'],
          scale: '40名 / デバイス数百台',
        },
      ],
    },
    {
      id: 'proj-4',
      title: 'iPad管理システム導入・運用とテクニカルサポート',
      period: '2015年4月 - 2021年2月',
      isCurrent: false,
      roleInExp: 'PL',
      scaleInExp: 'チーム5名 / 全体300名',
      osInExp: 'Windows 10 / macOS / iPadOS',
      summary: 'iPad管理基盤の選定から導入、全国100拠点のテクニカルサポート体制構築までを一貫して担当。',
      projects: [
        {
          name: '全国店舗iPad導入プロジェクト',
          role: 'プロジェクトリーダー',
          period: '2015年4月 - 2021年2月',
          description: 'ABMとCLOMOの選定、全国拠点向けのサポート運用設計、M365導入プロジェクト管理を担当。',
          technologies: ['CLOMO', 'ABM', 'M365', 'AS/400', 'Access'],
          scale: '全国100拠点 / 300名規模',
        },
      ],
    },
    {
      id: 'proj-5',
      title: 'サーバー保守管理・職員管理システム構築',
      period: '2010年4月 - 2015年4月',
      isCurrent: false,
      roleInExp: 'メンバー',
      scaleInExp: 'チーム4名 / 全体40名',
      osInExp: 'Windows 7 / Windows Server / Linux',
      summary: '基礎的なIT運用、サーバー保守、Excel VBAを用いた業務改善に従事し、現場の作業削減を継続して支援。',
      projects: [
        {
          name: '職員管理システム・業務ツール改善',
          role: 'エンジニア',
          period: '2010年4月 - 2015年4月',
          description: '勤怠・交通費精算システムの保守と、Excel VBAによる入力作業の自動化を担当。',
          technologies: ['Windows Server', 'VMware', 'Excel VBA', 'Linux'],
          scale: '40名規模',
        },
      ],
    },
  ],
  skillCategories: [
    {
      category: 'プロジェクトマネジメント',
      skills: [
        { name: 'PMO / PL', level: 90 },
        { name: 'アジャイル / ウォーターフォール', level: 85 },
        { name: 'システム戦略策定 / ベンダーコントロール', level: 80 },
      ],
    },
    {
      category: 'クラウド / インフラ',
      skills: [
        { name: 'Microsoft 365', level: 95 },
        { name: 'Azure / Active Directory', level: 90 },
        { name: 'GCP / BigQuery', level: 75 },
        { name: 'セキュリティ運用', level: 85 },
      ],
    },
    {
      category: 'デバイス / 資産管理',
      skills: [
        { name: 'MDM運用', level: 95 },
        { name: 'Windows / Mac / iPad キッティング', level: 98 },
        { name: 'IT資産管理', level: 90 },
      ],
    },
    {
      category: '業務自動化 / AI活用',
      skills: [
        { name: 'Claude / Gemini / Copilot 活用', level: 92 },
        { name: 'Python / JavaScript / VBA', level: 85 },
        { name: 'Power Automate / n8n', level: 88 },
      ],
    },
  ],
  strengths: [
    '大規模プロジェクトの実務経験',
    'AIと自動化による業務改善',
    'マルチプラットフォーム対応力',
    '標準化と属人化解消',
    '全国拠点サポートの運用経験',
  ],
  selfPr: [
    {
      title: '大規模プロジェクトでの実務経験',
      content: '大規模組織におけるIT基盤刷新プロジェクトに継続して参画し、Windows 11移行、SASE導入、メール基盤整備など複数領域を横断して支援してきました。関係者調整と実行支援の両面で価値を発揮できます。',
    },
    {
      title: 'AIと自動化技術を用いた改善推進',
      content: 'Claude、Gemini、GitHub CopilotなどのAIを実務に取り入れ、Python、JavaScript、VBA、Power Automateを組み合わせた改善を継続しています。日々の業務を単純化し、再現性の高い運用へつなげることが得意です。',
    },
    {
      title: '複数デバイス・複数環境にまたがる対応力',
      content: 'Windows、Mac、iPad、Ubuntuなど複数環境での導入・運用経験があります。特にApple製品の大規模展開では、全国100拠点向けのサポート標準化と運用品質の向上を担いました。',
    },
  ],
};
