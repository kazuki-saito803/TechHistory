import type { TimelineItem } from "../types";
  
export const timelineData: TimelineItem[] = [
    {
        title: "統計検定",
        category: "自己学習",
        start: "2023-04",
        end: "2023-07",
        description: "統計検定2級を取得。加えて本やUdemyなどの教材を用いた実践形式の学習を通じて、統計的思考力とPythonでのデータ前処理・可視化・モデル作成のスキルを習得。", 
        techStack: ["Python", "Scikit-Learn", "Numpy", "Pandas", "Matplotlib"]
    },
    {
        title: "基本情報技術者試験",
        category: "自己学習",
        start: "2023-07",
        end: "2023-08",
        description: "アルゴリズム、ネットワーク、データベースを中心に、IT全般の体系的な知識を習得。特にトランザクション、E-R図、SQL文、IP・DNSなどのインフラ系知識に強み。", 
        techStack: ["Algorithm", "Network", "PostgreSQL"]
    },
    {
        title: "E資格",
        category: "自己学習",
        start: "2023-09",
        end: "2024-02",
        description: "深層学習・機械学習に必要な数学、データ前処理、モデル開発の理論と実装力を習得。PytorchやDockerを使った演習を通じ、AIモデルの開発から環境構築まで実践的スキルを獲得。", 
        techStack: ["Python", "Docker", "Pytorch", "Numpy", "Pnadas", "Matplotlib"]
    },
    {
        title: "Java資格",
        category: "自己学習",
        start: "2024-06",
        end: "2024-08",
        description: "ava Bronze～Goldを3ヶ月で取得。オブジェクト指向設計・例外処理・コレクションAPIなど、実務に応用可能な基礎力を短期間で習得。", 
        techStack: ["Java"]
    },
    {
        title: "Agent Discussion",
        category: "自己学習",
        start: "2025-06",
        end: "2025-07",
        description: "LoRAでファインチューニングしたLLM Agentと、Prompt Engineeringによってペルソナ付与したAgentとの対話内容を比較・評価。", 
        techStack: ["Hugging Face", "Local LLM", "LoRA", "Python", "Pytorch", "Docker"]
    },
    {
        title: "AICoder",
        category: "自己学習",
        start: "2025-07",
        end: "2025-08",
        description: "gpt-oss:20bを利用したFunction CallingとLang Chain, Lang Graphを利用したAgentアプリ作成。プロンプトを投げることでローカルにPythonなどのプログラムファイルを作成する。", 
        techStack: ["Local LLM", "LoRA", "Python", "Pytorch", "Lang Chain", "Lang Graph"]
    },
    {
        title: "lacalrag_toolkit",
        category: "自己学習",
        start: "2025-08",
        end: "2025-09",
        description: "Index登録した情報とプロンプトのベクトル検索により類似度を計算し、最終的な回答をLLMが出力するRAG型Chatbotアプリをローカル環境かつAPIとして提供するためのアプリ。", 
        techStack: ["Local LLM", "RAG", "Python", "Pytorch", "Docker", "Hugging Face","elastic search"]
    },
    {
        title: "理学療法士",
        category: "本業",
        start: "2021-04",
        end: "2024-03",
        description: "医療現場にて患者と向き合い、論理的な問題解決力と共感力を活かしチーム連携に貢献。コミュニケーション力とヒューマンスキルを磨いた。", 
        techStack: []
    },
    {
        title: "Java研修",
        category: "本業",
        start: "2024-04",
        end: "2024-06",
        description: "Linuxの基礎からJava/Springを用いたWebアプリ開発まで一貫した研修に取り組み、勤怠管理システムなどの開発を経験。", 
        techStack: ["Java", "Spring", "JSP", "Linux", "Tomcat", "Apache", "PostgreSQL", "JavaScript", "HTML", "CSS"]
    },
    {
        title: "e-learningシステム開発",
        category: "本業",
        start: "2024-06",
        end: "2024-09",
        description: "フロントエンド実装を担当。JavaScriptを中心に、HTML/CSSを活用しつつUI/UXにも配慮した開発を実施。", 
        techStack: ["JavaScript", "HTML", "CSS"]
    },
    {
        title: "生成AI Pre-Salls支援",
        category: "本業",
        start: "2024-09",
        end: "2024-12",
        description: "zure/AWS/GCPなどのクラウドAI技術を活用し、生成AI PoC開発・技術調査・顧客提案資料作成を実施。提案スキルとテックセールス経験を習得。", 
        techStack: ["Azure", "AWS", "GCP", "Python", "Flask", "RAG", "GenAI"]
    },
    {
        title: "生成AIプラットフォーム普及展開支援案件",
        category: "本業",
        start: "2024-12",
        end: "2025-09",
        description: "AKS環境でのRAG・Agent構築、技術資料作成・トレーニング講師など幅広い役割を担当。", 
        techStack: ["Azure", "Python", "TypeScript", "JavaScript", "RAG", "LLM", "GenAI", "Azure DevOps", "Git", "Docker", "Terraform", "Helm", "AKS"]
    },
    {
        title: "Webサイト作成",
        category: "副業",
        start: "2025-01",
        end: "2025-06",
        description: "地域の神社向けWebサイトをReactで構築。CI/CDパイプライン（GitHub Actions）構築、Azure Static Web Appへのデプロイ、SEO対策・Google Console登録も含むフルスタック対応。", 
        techStack: ["TypeScript", "React", "Azure", "GitHub", "GitHub Actions", "Git", "Google Search Console"]
    }
];
