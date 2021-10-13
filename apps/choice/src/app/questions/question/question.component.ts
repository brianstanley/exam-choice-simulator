import { Component, OnInit, Input } from '@angular/core';
import { Answer } from "@choice/api-interfaces";

@Component({
  selector: 'choice-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})

export class QuestionComponent implements OnInit {
  @Input() question = '';
  @Input() options: Answer[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }
}
