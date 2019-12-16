import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizListComponent } from './quiz-list/quiz-list.component';
import { QuizQuestionComponent } from './quiz-question/quiz-question.component';
import { TotoComponent } from '../toto/toto.component';
import { QuizItemComponent } from './quiz-item/quiz-item.component';
import { QuizPlayerComponent } from './quiz-player/quiz-player.component';
import { QuizNavComponent } from './quiz-nav/quiz-nav.component';



@NgModule({
  declarations: [
    QuizListComponent,
    QuizQuestionComponent,
    TotoComponent,
    QuizItemComponent,
    QuizPlayerComponent,
    QuizNavComponent
  ],
  exports:[
    // Pour rendre le quiz player affichable EN DEHORS de QuizModule
    QuizPlayerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class QuizModule { }
