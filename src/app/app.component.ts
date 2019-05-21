import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public params = {
    count: Math.floor(Math.random() * 5),
  };

  constructor(
    translate: TranslateService,
  ) {
    translate.setDefaultLang('en');
    translate.use('en');
  }
}
