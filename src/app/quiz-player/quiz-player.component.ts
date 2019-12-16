import { Component, OnInit } from '@angular/core';
import { QUIZZES } from '../data/quizzes';
import { Answer } from '../models/answer';
import { AnswersState } from '../quiz-state-manager.service';

@Component({
  selector: 'app-quiz-player',
  templateUrl: './quiz-player.component.html',
  styles: []
})
export class QuizPlayerComponent implements OnInit {
  currentQuiz = QUIZZES[0];
  currentQuestion = QUIZZES[0].questions[0];
  currentAnswer = new Answer({ questionId: this.currentQuestion.id, multipleChoicesAllowed: false });
  currentAnswers: AnswersState = {};
  isStarted = false;

  constructor() { }

  ngOnInit() {
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
