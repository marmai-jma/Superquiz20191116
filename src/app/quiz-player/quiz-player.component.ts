import { Component, OnInit } from '@angular/core';
import { QUIZZES } from '../data/quizzes';
import { Answer } from '../models/answer';
import { AnswersState } from '../quiz-state-manager.service';
import { QuizService } from '../quiz.service';
import { Question } from '../models/question';
import { Quiz } from '../models/quiz';

@Component({
  selector: 'app-quiz-player',
  templateUrl: './quiz-player.component.html',
  styles: []
})
export class QuizPlayerComponent implements OnInit {
  currentQuiz : Quiz;
  currentQuestion : Question;
  currentAnswer : Answer;
  currentAnswers: AnswersState;
  isStarted = false;

  constructor(private quizService: QuizService) { }

  ngOnInit() {
    const quizId = 32; // Viendra de l'URL
    this.currentQuiz = this.quizService.loadQuiz(quizId);
    this.currentQuestion = this.currentQuiz.questions[0];
    this.currentAnswer = new Answer({ questionId: this.currentQuestion.id, multipleChoicesAllowed: false });
    this.currentAnswers = {};
  }

  startQuiz() {
    this.isStarted = true;
  }

  // Méthode appelée à chaque fois que l'enfant émet une réponse
  saveAnswer(answer: Answer){
    // ON pourrait aussi enregistrer dans une BDD
    // Stocke la réponse reçue, avec les autres dasn une propriété de classe
    this.currentAnswers[answer.questionId] = answer;
  }

  gotoPreviousQuestion(){}

  gotoNextQuestion(){
    this.currentQuestion = QUIZZES[0].questions[1];
    this.currentAnswer = new Answer({ questionId: this.currentQuestion.id, multipleChoicesAllowed: false });
  }
}
