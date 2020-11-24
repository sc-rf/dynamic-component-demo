import { Component, OnInit } from '@angular/core';
import { title } from 'process';
import { InjectableData } from '../app.component';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
})
export class CourseComponent implements OnInit {
  title = '';
  constructor(private data: InjectableData) {
    this.title = data.data.title;
  }

  ngOnInit(): void {}
}
