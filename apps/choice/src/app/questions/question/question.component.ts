import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'choice-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  equation: string = 'Si $\\sum_{i=1}^nx_i$ entonces';
  paragraph: string = ` $x ^ 2 + 5=7$ .`;
  paragraph2: string = '$$\\sum_{i=1}^n(x_i^2 - \\overline{x}^2)$$';

  constructor() { }

  ngOnInit(): void {
  }

}
