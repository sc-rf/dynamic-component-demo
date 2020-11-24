import { RoutingService } from './routing.service';
import { Component, Injector, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'dynamic-component-demo';
  componentsList = [];
  constructor(
    private router: Router,
    private routingService: RoutingService,
    private inj: Injector
  ) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        console.log(event);
        this.routingService.getComponents(event.url).subscribe((data) => {
          console.log(data);
          this.componentsList = data;
        });
      });
  }

  createInjector(item) {
    let injector = Injector.create(
      [{ provide: InjectableData, useValue: { data: item } }],
      this.inj
    );
    return injector;
  }
}

export class InjectableData {
  data: any;
}
