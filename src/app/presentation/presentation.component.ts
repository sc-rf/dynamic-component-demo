import { Component, Inject, OnInit } from '@angular/core';
import { InjectableData } from '../app.component';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss'],
})
export class PresentationComponent implements OnInit {
  name = '';
  constructor(private data: InjectableData) {
    this.name = data.data.name;
  }

  ngOnInit(): void {
    console.log(this.data);
  }
}
