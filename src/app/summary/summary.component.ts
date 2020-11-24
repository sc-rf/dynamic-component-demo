import { Component, OnInit } from '@angular/core';
import { InjectableData } from '../app.component';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
})
export class SummaryComponent implements OnInit {
  summary = [];
  constructor(private data: InjectableData) {
    this.summary = data.data.courseList;
  }

  ngOnInit(): void {}
}
