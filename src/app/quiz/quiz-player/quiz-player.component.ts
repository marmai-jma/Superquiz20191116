import { Component, OnInit } from '@angular/core';
import { QUIZZES } from '../../data/quizzes';
import { Answer } from '../../models/answer';
import { AnswersState, QuizStateManager } from '../quiz-state-manager.service';
import { QuizService } from '../quiz.service';
import { Question } from '../../models/question';
import { Quiz } from '../../models/quiz';

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

  constructor(private quizService: QuizService,
              private qsm: QuizStateManager) { }

  ngOnInit() {
    const quizId = 32; // Viendra de l'URL
    this.currentQuiz = this.quizService.loadQuiz(quizId);
    // définition du quiz en cours dans le quizStateManager
    this.qsm.setQuiz(this.currentQuiz);

    // Initialise la liste des réponses
    this.currentAnswers = this.qsm.getAllAnswers();
  }

  startQuiz() {
    this.isStarted = true;
    const qa = this.qsm.getFirstQA();
    this.currentQuestion = qa.question;
    this.currentAnswer = qa.answer;
  }

  // Méthode appelée à chaque fois que l'enfant émet une réponse
  saveAnswer(answer: Answer){
    // ON pourrait aussi enregistrer dans une BDD
    // Stocke la réponse reçue, avec les autres dasn une propriété de classe
    this.qsm.saveAnswer(answer);
  }

  gotoPreviousQuestion(){
    const qa = this.qsm.getPreviousQA();
    this.currentQuestion = qa.question;
    this.currentAnswer = qa.answer;
  }

  gotoNextQuestion(){
    const qa = this.qsm.getNextQA();
    this.currentQuestion = qa.question;
    this.currentAnswer = qa.answer;
  }
}
