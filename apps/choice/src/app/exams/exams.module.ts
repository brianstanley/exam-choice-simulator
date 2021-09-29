import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamsComponent } from './exams.component';
import { ExamComponent } from './exam/exam.component';
import { ExamListComponent } from './exam-list/exam-list.component';
import {RouterModule} from "@angular/router";



@NgModule({
    declarations: [
        ExamsComponent,
        ExamComponent,
        ExamListComponent
    ],
    exports: [
        ExamListComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class ExamsModule { }
