// 保存データから参照するIDは固定文字列とし、公開後に変更しない。
export interface Slide {
  id: string
  title: string
  body: string
}

export interface Question {
  id: string
  type: 'choice'
  lessonId: string
  slideId: string
  prompt: string
  choices: { id: string; text: string }[]
  correctChoiceId: string
  explanation: string
}

export interface Lesson {
  id: string
  title: string
  description: string
  estimatedMinutes: number
  slides: Slide[]
  practiceQuestions: Question[]
}

export interface Section {
  id: string
  title: string
  description: string
  lessons: Lesson[]
  testQuestions: Question[]
}

export interface Subject {
  id: string
  title: string
  description: string
  sections: Section[]
}
