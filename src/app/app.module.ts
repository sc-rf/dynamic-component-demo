import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PresentationComponent } from './presentation/presentation.component';
import { CourseComponent } from './course/course.component';
import { QuestionComponent } from './question/question.component';
import { SummaryComponent } from './summary/summary.component';
import { FinalTestComponent } from './final-test/final-test.component';

@NgModule({
  declarations: [
    AppComponent,
    PresentationComponent,
    CourseComponent,
    QuestionComponent,
    SummaryComponent,
    FinalTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
