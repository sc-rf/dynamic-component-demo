import { FinalTestComponent } from './final-test/final-test.component';
import { SummaryComponent } from './summary/summary.component';
import { QuestionComponent } from './question/question.component';
import { CourseComponent } from './course/course.component';
import { PresentationComponent } from './presentation/presentation.component';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

const COMPONENT_ROUTES = {
  page1: [
    {
      component: PresentationComponent,
      data: { name: 'Rafaa Tutor' },
    },
    {
      component: SummaryComponent,
      data: { courseList: ['c1', 'c2', 'c3'] },
    },
  ],
  page2: [
    {
      component: CourseComponent,
      data: { title: 'Angular' },
    },
    {
      component: QuestionComponent,
      data: { question: 'Angular Questions' },
    },
  ],
  page3: [
    {
      component: PresentationComponent,
      data: { name: 'Rafaa Tutor' },
    },
    {
      component: SummaryComponent,
      data: { courseList: ['c1', 'c2', 'c3'] },
    },
    {
      component: FinalTestComponent,
      data: { questionList: ['what is it', 'was ist das', 'wer bist du'] },
    },
    {
      component: PresentationComponent,
      data: { name: 'Ferid Student' },
    },
  ],
};

@Injectable({
  providedIn: 'root',
})
export class RoutingService {
  getComponents(url: string): Observable<any> {
    const urlArray = url.split('/');
    let data = COMPONENT_ROUTES[urlArray[1]];
    console.log(data, urlArray[1]);

    return of(data);
  }

  constructor() {}
}
