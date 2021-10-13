import { ExamsService } from './../../../../../../libs/core-data/src/lib/services/exams/exams.service';
import { Exam } from './../../../../../../libs/api-interfaces/src/lib/api-interfaces';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'choice-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.scss'],
})
export class ExamComponent implements OnInit {
  // paragraph: string = `$\\sum_{i=2}^nx_i$`;          Ejemplos de strings para ng-katex
  // paragraph2: string = '$\\sum_{i=3}^nx_i$';
  // paragraphs = [{id: 0, value: this.paragraph},
  //               {id: 1, value: this.paragraph2}];

  exams: Exam[] | undefined;
  i = 0;

  constructor(private examsService: ExamsService) {

  }

  ngOnInit(): void {
    this.loadExams();
  }

  loadExams() {
    this.examsService.all()
      .subscribe(exams => this.exams = exams);
  }

  onNext() {
    this.i++;
  }
}
