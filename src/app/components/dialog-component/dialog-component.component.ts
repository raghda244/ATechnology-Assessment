import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MenuItem } from 'primeng/api';
import { AutoCompleteCompleteEvent } from 'primeng/autocomplete';

@Component({
  selector: 'app-dialog-component',
  templateUrl: './dialog-component.component.html',
  styleUrls: ['./dialog-component.component.css']
})
export class DialogComponentComponent {

  platforms: any[] = []
  projects: any[] = []
  selectedPlatform: any;
  selectedProject: any;
  items: MenuItem[] = [];
  chipValues: string[] | undefined;
  users: any[] | undefined;
  selectedUser: any;
  filteredUsers: any[] = [];
  currentLanguage:any;
  currentDirection:any;

  constructor(private translate:TranslateService){
    this.currentLanguage = localStorage.getItem('lang') || 'en';
    // this.currentDirection = this.currentLanguage === 'en'?'ltr':'rtl;'
  }
  ngOnInit() {
    console.log(this.currentLanguage)
    this.platforms = [
      { img: 'assets/images/instagram.png', name: localStorage.getItem('lang')==='ar'?'منصة الانستجرام':'Instagram Platform'},
      { img: 'assets/images/facebook.png', name: localStorage.getItem('lang')==='ar'?'منصة الفيسبوك':'Facebook Platform'},
      { img: 'assets/images/linkedin.png', name: localStorage.getItem('lang')==='ar'?'منصة لينكيد ان':'Linkedin Platform' }
    ];
    this.projects = [
      { img: 'assets/images/python.png', name: localStorage.getItem('lang')==='ar'?'مشروع بايثون':'Python Project' },
      { img: 'assets/images/java.png', name:  localStorage.getItem('lang')==='ar'?'مشروع جافا':'Java Project' },
      { img: 'assets/images/physics.png', name:  localStorage.getItem('lang')==='ar'?'مشروع ريأكت':'React Project'}
    ];
    this.items = [
      {
        label: localStorage.getItem('lang')==='ar'?'تحديث':'Update',
        icon: 'pi pi-refresh',
        command: () => {
        }
      },
      {
        label: localStorage.getItem('lang')==='ar'?'حذف':'Delete',
        icon: 'pi pi-times',
        command: () => {
        }
      }
    ];
    this.users = [
      {
        name: 'Mohamed Ghonaim',
        img: 'assets/images/man2.png'
      },
      {
        name: 'Raghda Mohsen',
        img: 'assets/images/woman.png'
      },
      {
        name: 'Ahmed Salem',
        img: 'assets/images/gamer.png'
      },
      {
        name: 'Khaled Moataz',
        img: 'assets/images/man.png'
      }
    ]
  }
  filterUser(event: AutoCompleteCompleteEvent) {
    let filtered: any[] = [];
    let query = event.query;

    for (let i = 0; i < (this.users as any[]).length; i++) {
      let user = (this.users as any[])[i];
      if (user.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(user);
      }
    }

    this.filteredUsers = filtered;
  }
}
