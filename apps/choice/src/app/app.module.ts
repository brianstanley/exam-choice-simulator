import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { CoreDataModule} from '@choice/core-data';
import { CoreStateModule} from '@choice/core-state';
import { MaterialModule } from '@choice/material';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { QuestionsComponent } from './questions/questions.component';
import { SubjectDetailComponent } from './subjects/subject-detail/subject-detail.component';
import { SubjectListComponent } from './subjects/subject-list/subject-list.component';
import { ExamsModule } from "./exams/exams.module";
import { SubjectsService } from "../../../../libs/core-data/src/lib/services/subjects/subjects.service";
import { ExamTypesService } from "../../../../libs/core-data/src/lib/services/examTypes/exam-types.service";

@NgModule({
  declarations: [AppComponent, HomeComponent, SubjectsComponent, SidebarComponent, QuestionsComponent, SubjectDetailComponent, SubjectListComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}, {}),
    CoreDataModule,
    CoreStateModule,
    MaterialModule,
    AppRoutingModule,
    ExamsModule,
  ],
  providers: [
    SubjectsService,
    ExamTypesService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
