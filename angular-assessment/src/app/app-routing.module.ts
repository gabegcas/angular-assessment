import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

//Import Components

import { QuizComponent } from './quiz/quiz.component';

const routes: Routes = [
  { path: '', component: QuizComponent },

]

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
