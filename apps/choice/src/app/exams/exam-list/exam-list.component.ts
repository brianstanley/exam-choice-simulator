import { Component, OnInit } from '@angular/core';
import {ExamTypesService} from "../../../../../../libs/core-data/exam-types.service";
import {ExamType} from "@choice/api-interfaces";

@Component({
  selector: 'choice-exam-list',
  templateUrl: './exam-list.component.html',
  styleUrls: ['./exam-list.component.scss']
})
export class ExamListComponent implements OnInit {

  constructor(private examTypesService: ExamTypesService) {
  }

  examTypes: ExamType[] | undefined;

  ngOnInit(): void {
    this.loadExamTypes();
  }

  loadExamTypes() {
    this.examTypesService.all()
      .subscribe(examTypes => this.examTypes = examTypes);
  }
}
