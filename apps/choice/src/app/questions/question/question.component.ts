import { Question } from './../../exams/exam/exam.component';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'choice-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  @Input() title = '';
  @Input() questions: Question[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
