import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'choice-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.scss'],
})
export class ExamComponent implements OnInit {

  equation: string = '\\sum_{i=1}^nx_i';  
  paragraph: string = `You can write text, that contains expressions like this: $x ^ 2 + 5$ inside them. As you probably know.`;
  paragraph2: string = 'You also can write expressions in display mode as follows: $$\\sum_{i=1}^n(x_i^2 - \\overline{x}^2)$$';

  constructor() { }

  ngOnInit(): void {
  }

}
