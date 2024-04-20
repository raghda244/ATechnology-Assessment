import { DOCUMENT } from '@angular/common';
import { ChangeDetectorRef, Component, Inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MenuItem } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { DialogComponentComponent } from 'src/app/components/dialog-component/dialog-component.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  providers: [DialogService]
})
export class HomePageComponent {
  navItems: MenuItem[] = [];
  activeItem: MenuItem | undefined;
  languages: any[] = [];
  selectedLanguage: any = {};
  ref: DynamicDialogRef | undefined;
  currentLanguage:any;

  constructor(public dialogService: DialogService, private translate: TranslateService, @Inject(DOCUMENT) private document: Document, public cd:ChangeDetectorRef) {
    this.currentLanguage= localStorage.getItem('lang') || 'en';
  }
  ngOnInit() {
    this.languages = [{ name: 'English', code: 'en' }, { name: 'عربي', code: 'ar' }];
    this.selectedLanguage = localStorage.getItem('lang') === 'en' ? { name: 'English', code: 'en' } : { name: 'عربي', code: 'ar' } || { name: 'English', code: 'en' }
  }
  show() {
    this.ref = this.dialogService.open(DialogComponentComponent, {
      header: localStorage.getItem('lang')==='ar'?'إنشاء صفقة جديدة':'Create New Deal', 
      width: '80%', contentStyle: { borderTopStyle: 'solid', borderTopWidth: '1px' }
    });
  }
  changeLanguage() {
    let htmlTag = this.document.getElementsByTagName('html')[0] as HTMLHtmlElement;
    if (this.selectedLanguage.code === 'en') {
      localStorage.setItem('lang', 'en');
      this.currentLanguage = 'en'
      htmlTag.dir = 'ltr';
      this.translate.use('en')
    }
    else {
      localStorage.setItem('lang', 'ar');
      this.currentLanguage = 'ar'
      htmlTag.dir = 'rtl';
      this.translate.use('ar')
    }
    this.cd.detectChanges();
  }
}
