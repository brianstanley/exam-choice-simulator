export interface Message {
  message: string;
}


// Aca comprto los data models entre frontend y backend

export interface BaseEntity {
  id: number | string | null;
}

export interface Subject extends BaseEntity {
  name: string;
}

export interface Exam extends BaseEntity {
  examConfigId: number;
  questions: [{
    question: string,
    options: [
      value: Answer,
    ]
  }];
}

export interface ExamConfig extends BaseEntity {
  time: number;
  examTypeId: number;
  subjectId: number;
}

export interface ExamType extends BaseEntity {
  name: string;
}

export interface Answers extends BaseEntity {
  text: string;
}

export interface Questions extends BaseEntity {
  text: string;
  answersIds: [];
  examTypesId: [];
  correctOptionId: number;
  subjectId: number;
}

export interface Answer extends BaseEntity {
  value: string
}
