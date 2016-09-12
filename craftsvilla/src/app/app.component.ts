import { Component } from '@angular/core';
import { HeaderComponent } from './header';
import { FooterComponent } from './footer';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  directives:[HeaderComponent,FooterComponent],
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'hi';
}
