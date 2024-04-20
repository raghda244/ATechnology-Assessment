import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'atechnology-task';
  dir:any;
  constructor(private translate: TranslateService,@Inject(DOCUMENT) private document: Document) {
    const currentLang = localStorage.getItem('lang') || 'en';
    translate.use(currentLang);
    let htmlTag = this.document.getElementsByTagName('html')[0] as HTMLHtmlElement;
    htmlTag.dir = (currentLang === 'ar') ? 'rtl' : 'ltr';
  }
}
