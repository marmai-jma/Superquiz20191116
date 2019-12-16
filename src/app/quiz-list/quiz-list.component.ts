import { Component, OnInit } from '@angular/core';
import { QUIZZES } from '../data/quizzes';
import { Quiz } from '../models/quiz';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styles: []
})
export class QuizListComponent implements OnInit {
  quizList = QUIZZES;  // indispensable pour rendre les quizzes visibles dans le template

  constructor() { }

  ngOnInit() {
  }

  public addQuiz() {
    this.quizList.push(new Quiz({title: 'Quiz bidon'}));
  }

  public deleteQuiz() {
    this.quizList.pop();
  }

}
