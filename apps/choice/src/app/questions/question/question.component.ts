import { Answer } from './../../../../../../libs/api-interfaces/src/lib/api-interfaces';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'choice-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  @Input() title = '';
  @Input() answers: Answer[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
