export type IndustryTrack = 'all' | 'vikoda' | 'horeca' | 'export' | 'general' | 'tech' | 'marketing' | 'finance' | 'hr';

export type UserLevel = 'A1' | 'A2-B1' | 'B2' | 'C1';

export type VikodaRank = 
  | 'Tân Binh Đảnh Thạnh' 
  | 'Chiến Binh Vikoda' 
  | 'Đại Sứ Toàn Cầu' 
  | 'Bậc Thầy Đàm Phán'
  | 'Lãnh Đạo Xuất Sắc';

export interface EmployeeProfile {
  employeeCode: string; // e.g. VKD-1957
  fullName: string;
  email: string;
  department: string;
  avatarUrl: string;
  title: string;
  highestDrillScore: number;
  totalPracticeCount: number;
  isLoggedIn: boolean;
  isAdmin?: boolean;
}

export interface GamificationState {
  xp: number;
  gems: number; // Ngọc khoáng
  energy: number; // Giọt khoáng (max 5)
  streakDays: number;
  rank: VikodaRank;
  completedNodeIds: string[];
  lastActiveDate: string;
  highestDrillScore: number;
}

export interface LeaderboardEntry {
  id: string;
  name: string;
  code: string;
  dept: string;
  avatar: string;
  drillScore: number;
  xp: number;
  streak: number;
  rankBadge: string;
  isCurrentUser?: boolean;
}

export interface UserStats {
  streakDays: number;
  completedTasksToday: number;
  totalPhrasesLearned: number;
  scenariosCompleted: number;
  quizScoreSum: number;
  quizTotalTaken: number;
  lastPracticeDate: string;
}

export interface PathNode {
  id: string;
  order: number;
  title: string;
  shortDesc: string;
  category: 'pitch' | 'factory' | 'speaking' | 'qa' | 'export';
  icon: string;
  xpReward: number;
  gemReward: number;
  color: 'cyan' | 'purple' | 'blue' | 'emerald';
}

export interface VikodaPitchCard {
  id: string;
  topic: string;
  englishHeadline: string;
  vietnameseHeadline: string;
  bulletPoints: {
    en: string;
    vi: string;
    keyword: string;
    phonetics?: string;
  }[];
  proTip: string;
  audioText: string;
}

export interface SpeakingChallenge {
  id: string;
  title: string;
  category: 'brand_pitch' | 'meeting' | 'buyer_objection' | 'factory_tour';
  englishSentence: string;
  phonetics: string;
  vietnameseMeaning: string;
  audioSpeedText?: string;
  keyWords: string[];
  culturalNote: string;
}

export interface BuyerQAItem {
  id: string;
  foreignQuestionEn: string;
  foreignQuestionVi: string;
  clientType: 'Foreign Importer' | '5-Star Hotel GM' | 'Japanese Buyer' | 'Supermarket Buyer';
  expertAnswerEn: string;
  expertAnswerVi: string;
  highlightedTerms: { term: string; meaning: string }[];
  audioText: string;
}

export interface EmailTemplate {
  id: string;
  title: string;
  category: 'export' | 'horeca' | 'deadline' | 'meeting' | 'decline' | 'followup' | 'escalation' | 'greeting' | 'request';
  vietnameseContext: string;
  subject: string;
  body: string;
  variables: string[];
  formality: 'formal' | 'semi-formal' | 'casual';
  keyPhrases: { phrase: string; explanation: string }[];
  proTip: string;
}

export interface MeetingPhrase {
  id: string;
  category: 'open' | 'opinion' | 'interrupt' | 'clarify' | 'disagree' | 'conclude' | 'smalltalk' | 'techissue';
  english: string;
  phonetics?: string;
  vietnamese: string;
  situation: string;
  tone?: 'formal' | 'diplomatic' | 'direct' | 'polite' | 'assertive';
  alternative?: string;
}

export interface RoleplayOption {
  id?: string;
  text: string;
  meaning?: string;
  tone?: 'diplomatic' | 'blunt' | 'passive' | 'perfect' | 'too-passive' | 'too-blunt';
  score?: number;
  feedback?: string;
  label?: string;
}

export interface RoleplayMessage {
  speaker: 'partner' | 'user';
  speakerName?: string;
  speakerRole?: string;
  avatar?: string;
  text?: string;
  message?: string;
  translation?: string;
  vietnameseTranslation?: string;
  audioText?: string;
  toneFeedback?: 'diplomatic' | 'blunt' | 'passive' | 'perfect' | 'too-passive' | 'too-blunt';
  xpAward?: number;
  culturalNote?: string;
  options?: RoleplayOption[];
}

export interface RoleplayScenario {
  id: string;
  title: string;
  subtitle: string;
  industry: IndustryTrack;
  partnerRole?: string;
  partnerAvatar?: string;
  difficulty: 'A2-B1' | 'B2' | 'C1' | 'Beginner' | 'Intermediate' | 'Advanced';
  durationMinutes?: number;
  objective?: string;
  briefing?: string;
  dialogue: RoleplayMessage[];
  optionsForUser?: {
    step: number;
    choices: {
      id?: string;
      text: string;
      meaning?: string;
      tone?: 'diplomatic' | 'blunt' | 'passive' | 'perfect' | 'too-passive' | 'too-blunt';
      score?: number;
      feedback?: string;
    }[];
  }[];
}

export interface BusinessVocabItem {
  id: string;
  term: string;
  type: 'buzzword' | 'idiom' | 'phrasal_verb' | 'collocation';
  industry: IndustryTrack;
  phonetics: string;
  definitionVi: string;
  exampleSentenceEn?: string;
  exampleSentenceVi?: string;
  exampleEn?: string;
  exampleVi?: string;
  boardroomTip?: string;
  corporateContext?: string;
  avoidLiteralTranslation?: string;
  avoidMistake?: string;
}

export interface CommonMistakeItem {
  id: string;
  wrongSentence: string;
  correctSentence: string;
  vietnameseMeaning: string;
  category?: string;
  ruleExplanation?: string;
  explanation?: string;
  whyVietnameseMakeIt?: string;
  options: string[];
  correctOptionIndex: number;
}
