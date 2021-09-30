import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'choice-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.scss'],
})
export class ExamComponent implements OnInit {
  equation: string = 'Si $\\sum_{i=1}^nx_i$ entonces';
  paragraph: string = `$\\sum_{i=2}^nx_i$`;
  paragraph2: string = '$\\sum_{i=3}^nx_i$';
  paragraphs = [{id: 0, value: this.paragraph},
                {id: 1, value: this.paragraph2}];

  constructor() { }

  ngOnInit(): void {
  }

}

export interface Answer {
  id: number,
  value: string
}
