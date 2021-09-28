import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamsComponent } from './exams.component';
import { ExamComponent } from './exam/exam.component';
import { ExamListComponent } from './exam-list/exam-list.component';



@NgModule({
  declarations: [
    ExamsComponent,
    ExamComponent,
    ExamListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ExamsModule { }
