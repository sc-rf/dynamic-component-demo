import { Component, OnInit } from '@angular/core';
import { InjectableData } from '../app.component';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit {
  question = '';
  constructor(private data: InjectableData) {
    this.question = data.data.question;
  }

  ngOnInit(): void {}
}
