import type { TimelineItem } from "../types";
  
export const timelineData: TimelineItem[] = [
    {
        title: "統計検定",
        category: "自己学習",
        start: "2023-04",
        end: "2023-07",
        description: "2級を取得。同時にデータ分析100本ノックなどの書籍での分析も学習を行った。", 
        techStack: ["Python", "Scikit-Learn", "Numpy", "Pandas", "Matplotlib"]
    },
    {
        title: "基本情報技術者試験",
        category: "自己学習",
        start: "2023-07",
        end: "2023-08",
        description: "IT技術全般の知識を習得。\nDB: トランザクション処理やスキーマ、E-R図などの概念的な理解からSQLの実践的な分野まで学習。\nNW: LANやFW, DNS, IPアドレスなどのネットワークに関する基本的な概念の理解\n", 
        techStack: ["Algorithm", "Network", "PostgreSQL"]
    },
    {
        title: "E資格",
        category: "自己学習",
        start: "2023-09",
        end: "2024-02",
        description: "AI実装に関する技術を習得。応用数学からデータ処理、モデル学習まで理論および実装の知見を獲得", 
        techStack: ["Python", "Docker", "Pytorch", "Numpy", "Pnadas", "Matplotlib"]
    },
    {
        title: "Java資格",
        category: "自己学習",
        start: "2024-06",
        end: "2024-08",
        description: "3ヶ月のJava研修後、Java BronzeからGoldまでを3ヶ月間で取得。オブジェクト指向の理解や静的型付け言語について学習", 
        techStack: ["Java"]
    },
    {
        title: "Agent Discussion",
        category: "自己学習",
        start: "2025-06",
        end: "2025-07",
        description: "LoRA Fine-turningを実施したAgentとpromptベースでペルソナを与えたAgentで議論の内容に関する違いを評価。", 
        techStack: ["Hugging Face", "Local LLM", "LoRA", "Python", "Pytorch", "Docker", "Kubernetes"]
    },
    {
        title: "Microsoft認定資格",
        category: "自己学習",
        start: "2025-04",
        end: "2025-08",
        description: "", 
        techStack: ["Azure"]
    },
    {
        title: "理学療法士",
        category: "本業",
        start: "2021-04",
        end: "2024-03",
        description: "エンジニアとして就業前は理学療法士として私立病院に勤務。", 
        techStack: []
    },
    {
        title: "Java研修",
        category: "本業",
        start: "2024-04",
        end: "2024-06",
        description: "3ヶ月間の社内研修\n1ヶ月目: Linuxの基礎コマンドやApacheサーバーの立ち上げなどインフラ領域の基礎技術を学習\n2ヶ月目: Javaの基本構文やノンフレームワークによる簡単な計算機アプリの作成など\n3ヶ月目: SpringやJSPによる社内勤怠管理システム開発やJavascript、SQLの学習", 
        techStack: ["Java", "Spring", "JSP", "Linux", "Tomcat", "Apache", "PostgreSQL", "JavaScript", "HTML", "CSS"]
    },
    {
        title: "e-learningシステム開発",
        category: "本業",
        start: "2024-06",
        end: "2024-09",
        description: "プロジェクトメンバー15人での自社内開発。フロントエンドをノンフレームワークのJavaScript, バックエンドをSpring, DBをPostgreSQLで作成したアプリケーション開発。主にJavaScriptを使用したフロントエンドの実装を担当", 
        techStack: ["JavaScript", "HTML", "CSS"]
    },
    {
        title: "生成AI Pre-Salls支援",
        category: "本業",
        start: "2024-09",
        end: "2024-12",
        description: "クラウドAIを中心に生成AIに関する調査およびプロトタイプの作成をもとに顧客へ発表。", 
        techStack: ["Azure", "AWS", "GCP", "Python", "Flask", "RAG", "GenAI"]
    },
    {
        title: "生成AIプラットフォーム普及展開支援案件",
        category: "本業",
        start: "2024-12",
        end: "2025-09",
        description: "RAGやAgentの構築を行うプラットフォームの構築、資料作成、トレーニング講師としてトレーニング開催などの作業に着手", 
        techStack: ["Azure", "Python", "TypeScript", "JavaScript", "RAG", "LLM", "GenAI", "Azure DevOps", "Git", "Docker", "Terraform", "Helm", "AKS"]
    },
    {
        title: "Webサイト作成",
        category: "副業",
        start: "2025-01",
        end: "2025-06",
        description: "神社のWebサイト作成。Reactを使用し、Azure Static Web AppへのCI/CDパイプラインの構築とドメイン取得、ブラウザへのコンソール登録、SEO対策を実施", 
        techStack: ["TypeScript", "React", "Azure", "GitHub", "GitHub Actions", "Git", "Google Search Console"]
    }
];
