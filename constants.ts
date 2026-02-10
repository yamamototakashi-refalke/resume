
import { ResumeData } from './types';

export const RESUME_DATA: ResumeData = {
  name: "山本 孝",
  nameKana: "やまもと たかし",
  age: "38歳",
  gender: "男性",
  address: "埼玉県所沢市",
  station: {
    line: "西武新宿線",
    name: "新所沢駅"
  },
  industryExp: "17年目",
  education: "大学卒業",
  role: "社内SE / PMO / システム導入 / 業務自動化",
  bio: "IT業界16年の経験を持つ社内SEとして、プロジェクトマネジメントからシステム導入、業務自動化まで幅広く従事。特に大規模組織におけるIT資産管理、M365を中心としたクラウド移行プロジェクトの経験を保有。AI活用（Claude、Gemini、GitHub Copilot）による業務効率化やPython・JavaScript・VBAを用いた自動化ツール開発にも積極的に取り組み、月最大100件のサポート対応をこなしながらチーム業務を実施。Apple製品の大規模展開経験も豊富。",
  contact: {
    email: "yamamoto.takashi@refalke.co.jp",
    phone: "070-4445-8958",
    location: "埼玉県所沢市"
  },
  experiences: [
    {
      id: "proj-1",
      title: "サポートデスク室の運用設計・業務改善とPMO業務",
      period: "2024年4月 — 2026年3月（予定）",
      isCurrent: true,
      roleInExp: "メンバー",
      scaleInExp: "チーム内3名 / 全体1000名",
      osInExp: "Windows10/11",
      summary: "システム戦略策定、Windows11移行、パスワードマネージャ移行等のプロジェクト管理に従事。AI活用による業務自動化を推進。",
      projects: [
        {
          name: "ITインフラ刷新プロジェクト",
          role: "PMO / システム導入担当",
          period: "2024年4月 — 継続中",
          description: "Windows11/25H2移行管理、SASE移行、M365ライセンス管理、AI（Claude, Gemini）を活用した業務自動化ツールの実装。",
          technologies: ["M365", "Azure", "SASE(CATO)", "Python", "n8n", "PowerAutomate", "Claude/Gemini/Copilot"],
          scale: "1000名規模",
          os: "Windows 11"
        }
      ]
    },
    {
      id: "proj-2",
      title: "サポートデスク室の運用設計・業務改善とPMO業務",
      period: "2023年10月 — 2024年3月",
      isCurrent: false,
      roleInExp: "PMO / PL",
      scaleInExp: "チーム内10名 / 全体3000名",
      osInExp: "Windows10/11",
      summary: "リーダーとしてメンバーの業務取りまとめ、プロジェクト進捗管理、会議ファシリテーションを担当。",
      projects: [
        {
          name: "業務効率改善プロジェクト",
          role: "PL",
          period: "2023年10月 — 2024年3月",
          description: "システム戦略策定、会議資料制作、ファシリテーションを通じて3000名規模の組織における業務改善をリード。",
          technologies: ["Jira", "Asana", "PowerAutomate", "OfficeScript", "Figma"],
          scale: "3000名規模"
        }
      ]
    },
    {
      id: "proj-3",
      title: "チーム内プロジェクトの進捗管理・運用業務",
      period: "2021年2月 — 2023年8月",
      isCurrent: false,
      roleInExp: "PL",
      scaleInExp: "チーム内4名 / 全体40名",
      osInExp: "MacOS 12, iPadOS 15, Ubuntu, Linux",
      summary: "Apple製品の大規模キッティングや、船舶監視カメラIoTデバイスの運用、障害対応マニュアルの標準化を実施。",
      projects: [
        {
          name: "マルチプラットフォーム・アセット管理",
          role: "PL",
          period: "2021年2月 — 2023年8月",
          description: "iPad/Macのキッティング、IoTデバイス(Ubuntu)の選定・運用。BigQueryを用いたデータ抽出、サポートの標準化による属人化解消。",
          technologies: ["ABM", "MDM(Bizmobile)", "GCP", "BigQuery", "Ubuntu", "OpenSSH"],
          scale: "40名 / デバイス数百台"
        }
      ]
    },
    {
      id: "proj-4",
      title: "iPad管理システム導入・運用とテクニカルサポート",
      period: "2015年4月 — 2021年2月",
      isCurrent: false,
      roleInExp: "PL",
      scaleInExp: "チーム内7名 / 全体300名",
      osInExp: "Windows10, MacOS 11, iPadOS 13",
      summary: "iPad管理システム(ABM, MDM)の選定・導入から、全国100拠点のテクニカルサポートまでを一貫して担当。",
      projects: [
        {
          name: "全国店舗iPad導入プロジェクト",
          role: "プロジェクトリード",
          period: "2015年4月 — 2021年2月",
          description: "ABM/CLOMOの企画・選定。全国100拠点のテクニカルサポート体制構築。M365導入プロジェクトのマネジメント。",
          technologies: ["MDM(CLOMO)", "ABM", "M365", "AS/400", "Access"],
          scale: "全国100拠点 / 300名"
        }
      ]
    },
    {
      id: "proj-5",
      title: "サーバーの保守管理と職員管理システムの構築",
      period: "2010年4月 — 2015年4月",
      isCurrent: false,
      roleInExp: "メンバー",
      scaleInExp: "チーム内3名 / 全体40名",
      osInExp: "Windows 7, Windows Server, Linux",
      summary: "基礎的なIT運用、サーバー保守、VBAを用いた業務ツール改善による効率化に従事。",
      projects: [
        {
          name: "職員管理システム・ツール改善",
          role: "エンジニア",
          period: "2010年4月 — 2015年4月",
          description: "勤怠・交通費精算システムの保守、Excel VBAによる入力作業の自動化・効率化。",
          technologies: ["Windows Server", "VMware", "Excel VBA", "Linux"],
          scale: "40名規模"
        }
      ]
    }
  ],
  skillCategories: [
    {
      category: "プロジェクトマネジメント",
      skills: [
        { name: "PMO / PL (Jira, Asana, Backlog)", level: 90 },
        { name: "アジャイル / ウォーターフォール", level: 85 },
        { name: "システム戦略策定 / ベンダーコントロール", level: 80 }
      ]
    },
    {
      category: "クラウド・インフラ",
      skills: [
        { name: "Microsoft 365 (Endpoint Mgr, Teams, Exch)", level: 95 },
        { name: "Azure / Active Directory", level: 90 },
        { name: "GCP / BigQuery", level: 75 },
        { name: "セキュリティ (SASE, CrowdStrike)", level: 85 }
      ]
    },
    {
      category: "デバイス・資産管理",
      skills: [
        { name: "MDM (ABM, CLOMO, Bizmobile)", level: 95 },
        { name: "Windows / Mac / iPad キッティング", level: 98 },
        { name: "IT資産管理 (Lanscope, Skysea)", level: 90 }
      ]
    },
    {
      category: "業務自動化・AI",
      skills: [
        { name: "AI活用 (Claude, Gemini, Copilot)", level: 92 },
        { name: "Python / JavaScript / VBA", level: 85 },
        { name: "PowerAutomate / n8n", level: 88 }
      ]
    }
  ],
  strengths: ["大規模プロジェクトの実務経験", "AI・自動化による業務効率化", "マルチプラットフォーム対応力", "属人化解消・標準化", "全国拠点サポート経験"],
  selfPr: [
    {
      title: "大規模プロジェクトでの実務経験",
      content: "大規模組織におけるIT基盤の刷新プロジェクトに従事。複数のシステム移行（Windows11、SASE、メールシステム等）に関わり、計画通りに完遂した経験があります。"
    },
    {
      title: "AI・自動化技術を活用した業務効率化",
      content: "Claude、Gemini、GitHub Copilot等の最新AI技術を積極的に業務に取り入れ、Python・JS・VBAを用いたツール開発により生産性向上に貢献しています。"
    },
    {
      title: "マルチプラットフォーム対応力",
      content: "Windows、Mac、iPadなど幅広いプラットフォームでの管理経験を保有。特にApple製品の大規模展開において全国100拠点のサポートを標準化しました。"
    }
  ]
};
