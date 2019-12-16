import { Injectable } from '@angular/core';
import { QUIZZES } from './data/quizzes';
import { Quiz } from './models/quiz';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor() { }

  // Retourne la liste de tous les quizzes.
  loadQuizzes(): Quiz[] {
    return QUIZZES;
  }

  // Retourne un quiz complet avec ses questions.
  loadQuiz(quizId: number): Quiz {
    return QUIZZES.find(quiz => quiz.id === quizId);
  }
}
