import { ReactNode } from "react";
import { BookOpen, GraduationCap, Target, Users, School, Brain } from "lucide-react";

export interface Course {
  slug: string;
  title: string;
  icon: ReactNode;
  shortDescription: string;
  description: string;
  schedule: string;
  targetGrades: string;
  goal: string;
  features: string[];
}

export const courseData: Course[] = [
  {
    slug: "regular",
    title: "通常授業",
    icon: <BookOpen className="w-5 h-5 text-blue-600" />,
    shortDescription: "基礎から応用まで、確実な学力を身につける",
    description: "一人ひとりの学力に合わせた指導で、着実な成績向上を実現します。",
    schedule: "平日 16:00-21:00",
    targetGrades: "小学生・中学生",
    goal: "学校成績の向上・内申点アップ",
    features: [
      "少人数制クラスで質の高い授業",
      "定期的な個別面談で進捗確認",
      "学校の定期テスト対策",
      "基礎から応用まで段階的な学習",
    ],
  },
  {
    slug: "stop",
    title: "STOPコース",
    icon: <Target className="w-5 h-5 text-blue-600" />,
    shortDescription: "難関校合格を目指す特別プログラム",
    description: "難関校合格に向けた特別カリキュラムで、高い目標達成をサポートします。",
    schedule: "平日 17:00-22:00 / 土曜 10:00-17:00",
    targetGrades: "中学2年生・3年生",
    goal: "難関高校合格",
    features: [
      "徹底した個別指導",
      "志望校別カリキュラム",
      "毎週の模擬テスト",
      "進路指導・面接対策",
    ],
  },
  {
    slug: "hirosaki-high",
    title: "弘前高校特訓コース",
    icon: <School className="w-5 h-5 text-blue-600" />,
    shortDescription: "弘前高校合格に特化した専門コース",
    description: "弘前高校の入試傾向を徹底分析し、合格に必要な力を養成します。",
    schedule: "平日 17:00-22:00 / 土曜 13:00-18:00",
    targetGrades: "中学3年生",
    goal: "弘前高校合格",
    features: [
      "過去問徹底分析",
      "弘前高校対策専門カリキュラム",
      "週末特別講座",
      "個別指導との併用可",
    ],
  },
  {
    slug: "advanced",
    title: "進学コース",
    icon: <GraduationCap className="w-5 h-5 text-blue-600" />,
    shortDescription: "大学進学を見据えた総合的な学習",
    description: "将来の大学進学を見据え、早期から必要な学力を養成します。",
    schedule: "平日 17:00-21:00 / 土曜 13:00-17:00",
    targetGrades: "中学1年生・2年生",
    goal: "高校進学・大学進学",
    features: [
      "5教科総合的な学習",
      "進路カウンセリング",
      "学習習慣の確立",
      "定期的な実力テスト",
    ],
  },
  {
    slug: "elementary-weekend",
    title: "小6土日附中入試コース",
    icon: <Brain className="w-5 h-5 text-blue-600" />,
    shortDescription: "附属中学校入試対策に特化",
    description: "弘前大学教育学部附属中学校の入試に向けた専門的な対策を行います。",
    schedule: "土曜・日曜 9:00-15:00",
    targetGrades: "小学6年生",
    goal: "附属中学校合格",
    features: [
      "附属中専門カリキュラム",
      "過去問演習",
      "面接・実技試験対策",
      "個別指導付き",
    ],
  },
  {
    slug: "exam-prep",
    title: "中三受験対策コース",
    icon: <Users className="w-5 h-5 text-blue-600" />,
    shortDescription: "高校受験に向けた総合対策",
    description: "志望校合格に向けて、学力と受験対策の両面から指導します。",
    schedule: "平日 17:00-22:00 / 土曜 10:00-16:00",
    targetGrades: "中学3年生",
    goal: "志望校合格",
    features: [
      "受験対策カリキュラム",
      "志望校別演習",
      "面接・小論文指導",
      "進路相談・受験指導",
    ],
  },
];