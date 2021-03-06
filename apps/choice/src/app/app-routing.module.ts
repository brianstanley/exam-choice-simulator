import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {SubjectsComponent} from "./subjects/subjects.component";
import {SubjectDetailComponent} from "./subjects/subject-detail/subject-detail.component";
import {SubjectListComponent} from "./subjects/subject-list/subject-list.component";
import {ExamComponent} from "./exams/exam/exam.component";

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'subjects', component: SubjectsComponent, children:
      [
        { path: '', component: SubjectListComponent  },
        { path: ':id', component: SubjectDetailComponent },
        { path: ':id/parcial', component: ExamComponent },
        { path: ':id/final', component: ExamComponent },
      ]
  },
  { path: 'test', component: SubjectsComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
