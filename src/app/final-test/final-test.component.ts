import { Component, OnInit } from '@angular/core';
import { InjectableData } from '../app.component';

@Component({
  selector: 'app-final-test',
  templateUrl: './final-test.component.html',
  styleUrls: ['./final-test.component.scss'],
})
export class FinalTestComponent implements OnInit {
  questionList = [];
  constructor(private data: InjectableData) {
    this.questionList = data.data.questionList;
  }

  ngOnInit(): void {}
}
