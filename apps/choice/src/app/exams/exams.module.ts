import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamsComponent } from './exams.component';
import { ExamComponent } from './exam/exam.component';
import { ExamListComponent } from './exam-list/exam-list.component';
import {RouterModule} from "@angular/router";
import { KatexModule } from 'ng-katex';



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
        RouterModule,
        KatexModule,
    ]
})
export class ExamsModule { }
