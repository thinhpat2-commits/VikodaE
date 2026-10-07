import { VIKODA_CURRICULUM, UnitLesson, LessonExercise } from './curriculumData';

export interface DynamicArenaQuestion {
  id: string;
  category: string;
  promptEn: string;
  promptVi: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  cefrLevel: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
  lessonTitle?: string;
}

// Map unit level string to CEFR tier
const resolveCefrLevel = (levelStr: string): 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2' => {
  if (levelStr.includes('C2')) return 'C2';
  if (levelStr.includes('C1')) return 'C1';
  if (levelStr.includes('B2')) return 'B2';
  if (levelStr.includes('B1')) return 'B1';
  if (levelStr.includes('A2')) return 'A2';
  return 'A1';
};

// Transform a curriculum exercise into a 4-option arena question
const transformExerciseToArenaQuestion = (
  ex: LessonExercise,
  lesson: UnitLesson
): DynamicArenaQuestion | null => {
  const cefr = resolveCefrLevel(lesson.level);

  // If already multiple choice or choice
  if (ex.options && ex.options.length >= 2 && typeof ex.correctIndex === 'number') {
    const correctOpt = ex.options[ex.correctIndex] || ex.englishSentence;
    // Use the exercise's actual pedagogical options
    let opts = [...ex.options];
    if (opts.length < 4) {
      // Build realistic contextual distractors based on sentence keywords rather than generic boilerplate
      const alt1 = correctOpt.replace(/\b(natural|alkaline|pristine|certified)\b/gi, 'artificial');
      const alt2 = correctOpt.replace(/\b(pleased|delighted|strictly|always)\b/gi, 'reluctant');
      const alt3 = 'We are currently unable to confirm this commercial requirement.';
      const possibleAlts = [alt1, alt2, alt3].filter(a => a !== correctOpt && !opts.includes(a));
      for (const alt of possibleAlts) {
        if (opts.length >= 4) break;
        opts.push(alt);
      }
    }

    return {
      id: `arena-${ex.id}`,
      category: lesson.title || 'Tiếng Anh Doanh Nghiệp Vikoda',
      promptEn: ex.promptVi || 'Chọn phương án tiếng Anh chuẩn mực nhất:',
      promptVi: ex.vietnameseMeaning ? `Dịch nghĩa cần chọn: "${ex.vietnameseMeaning}"` : (ex.promptVi || 'Chọn câu tiếng Anh chính xác:'),
      options: opts.slice(0, 4),
      correctIndex: ex.correctIndex < opts.length ? ex.correctIndex : 0,
      explanation: ex.explanation || ex.whyWrong || 'Đáp án chuẩn mực theo văn hóa và quy trình doanh nghiệp Vikoda.',
      cefrLevel: cefr,
      lessonTitle: lesson.title
    };
  }

  // If word_order, speak, or fill_blank: construct a high-quality challenge choice
  if (ex.englishSentence && (ex.vietnameseMeaning || ex.promptVi)) {
    const correct = ex.englishSentence;
    
    // Grammatical and contextual distractors tailored to the specific sentence
    const d1 = correct
      .replace(/\b(is|are)\b/gi, 'were')
      .replace(/\b(we|our)\b/gi, 'they')
      .replace(/\bto\b/gi, 'for');
    const d2 = correct
      .replace(/\b(always|strictly|promptly)\b/gi, 'rarely')
      .replace(/\b(ensure|delivering|provides)\b/gi, 'disregards');
    const d3 = correct
      .replace(/\b(pleased|delighted|honored)\b/gi, 'unwilling')
      .replace(/\b(standard|protocol|regulations)\b/gi, 'recommendations');

    const distractors = [
      d1 !== correct ? d1 : 'The department requested a postponement of this task.',
      d2 !== correct ? d2 : 'Our team could not locate the corresponding document.',
      d3 !== correct ? d3 : 'We must re-evaluate the proposed arrangement.'
    ];
    const uniqueDistractors = distractors.filter(d => d !== correct);

    return {
      id: `arena-${ex.id}`,
      category: lesson.title || 'Tiếng Anh Doanh Nghiệp Vikoda',
      promptEn: ex.englishSentence,
      promptVi: ex.vietnameseMeaning ? `Dịch nghĩa: "${ex.vietnameseMeaning}"` : (ex.promptVi || 'Chọn câu chuẩn xác:'),
      options: [correct, uniqueDistractors[0] || 'Alternative statement', uniqueDistractors[1] || 'Pending review', uniqueDistractors[2] || 'Unconfirmed clause'],
      correctIndex: 0,
      explanation: ex.explanation || 'Mẫu câu chuẩn mực sử dụng trong giao thương và đối ngoại quốc tế Vikoda.',
      cefrLevel: cefr,
      lessonTitle: lesson.title
    };
  }

  return null;
};

// Singleton pool extracted from all 100 lessons
let cachedQuestionPool: DynamicArenaQuestion[] | null = null;

export const getAllCurriculumArenaQuestions = (): DynamicArenaQuestion[] => {
  if (cachedQuestionPool) return cachedQuestionPool;

  const pool: DynamicArenaQuestion[] = [];
  VIKODA_CURRICULUM.forEach((lesson) => {
    if (lesson.exercises && Array.isArray(lesson.exercises)) {
      lesson.exercises.forEach((ex) => {
        const q = transformExerciseToArenaQuestion(ex, lesson);
        if (q) pool.push(q);
      });
    }
  });

  cachedQuestionPool = pool;
  return pool;
};

// Shuffle array
const shuffleArray = <T>(array: T[]): T[] => {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

// Get randomized questions from full 700 pool for PvP Arena
export const getRandomArenaPvPQuestions = (count = 5, preferredLevel?: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2'): DynamicArenaQuestion[] => {
  const all = getAllCurriculumArenaQuestions();
  let filtered = all;
  if (preferredLevel) {
    filtered = all.filter(q => q.cefrLevel === preferredLevel);
    if (filtered.length < count) {
      filtered = all; // fallback to full pool if not enough in tier
    }
  }
  const shuffled = shuffleArray(filtered);
  // Also shuffle the options so correctIndex is randomized among 0,1,2,3
  return shuffled.slice(0, count).map(q => {
    const correctOpt = q.options[q.correctIndex];
    const shuffledOptions = shuffleArray(q.options);
    const newCorrectIndex = shuffledOptions.indexOf(correctOpt);
    return {
      ...q,
      options: shuffledOptions,
      correctIndex: newCorrectIndex >= 0 ? newCorrectIndex : 0
    };
  });
};

// Get randomized questions for Endless Drill based on 3 tiers (Basic, Intermediate, Advanced)
export const getRandomEndlessDrillQuestions = (
  tier: 'basic' | 'intermediate' | 'advanced',
  count = 10
): DynamicArenaQuestion[] => {
  const all = getAllCurriculumArenaQuestions();
  let matched: DynamicArenaQuestion[] = [];

  if (tier === 'basic') {
    matched = all.filter(q => q.cefrLevel === 'A1' || q.cefrLevel === 'A2');
  } else if (tier === 'intermediate') {
    matched = all.filter(q => q.cefrLevel === 'B1' || q.cefrLevel === 'B2');
  } else {
    matched = all.filter(q => q.cefrLevel === 'C1' || q.cefrLevel === 'C2');
  }

  if (matched.length < count) {
    matched = all;
  }

  const shuffled = shuffleArray(matched);
  return shuffled.slice(0, count).map(q => {
    const correctOpt = q.options[q.correctIndex];
    const shuffledOptions = shuffleArray(q.options);
    const newCorrectIndex = shuffledOptions.indexOf(correctOpt);
    return {
      ...q,
      options: shuffledOptions,
      correctIndex: newCorrectIndex >= 0 ? newCorrectIndex : 0
    };
  });
};
