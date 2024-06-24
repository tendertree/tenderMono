import { createSchema, serial, varchar, text, timestamp, integer } from 'drizzle-orm';

const mySchema = createSchema();

export const Students = mySchema.table('students', {
  student_id: serial('student_id').primaryKey(),
  name: varchar('name', 255).notNull(),
  email: varchar('email', 255).unique().notNull(),
  created_at: timestamp('created_at').defaultNow()
});

export const Questions = mySchema.table('questions', {
  question_id: serial('question_id').primaryKey(),
  question_text: text('question_text').notNull(),
  difficulty_level: varchar('difficulty_level', 50),
  created_at: timestamp('created_at').defaultNow()
});

export const Choices = mySchema.table('choices', {
  choice_id: serial('choice_id').primaryKey(),
  question_id: integer('question_id').references(() => Questions.question_id),
  choice_text: text('choice_text').notNull(),
  word_association_quiz: text('word_association_quiz')
});

export const Answers = mySchema.table('answers', {
  answer_id: serial('answer_id').primaryKey(),
  question_id: integer('question_id').references(() => Questions.question_id),
  choice_id: integer('choice_id').references(() => Choices.choice_id)
});

export const WrongNotes = mySchema.table('wrong_notes', {
  note_id: serial('note_id').primaryKey(),
  student_id: integer('student_id').references(() => Students.student_id),
  question_id: integer('question_id').references(() => Questions.question_id),
  choice_id: integer('choice_id').references(() => Choices.choice_id),
  wrong_date: timestamp('wrong_date').defaultNow(),
  difficulty_level: varchar('difficulty_level', 50)
});

