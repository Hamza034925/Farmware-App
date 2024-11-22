import { Component, OnInit , AfterViewInit } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.page.html',
  styleUrls: ['./questionnaire.page.scss'],
})
export class QuestionnairePage implements AfterViewInit {

  selectedDisease: string  = '';
  diseases: string[] = ['Mastitis', 'Foot Rot', 'Brucellosis', 'Lameness', 'Bovine Tuberculosis'];

  themeToggle: boolean;

  constructor(private themeService: ThemeService  ) {
    this.themeToggle = this.themeService.isDark();
  }
  
  
  ngAfterViewInit() {
    this.applyTheme(); // Apply theme after view initialization
  }

  // Method to apply the theme using the service
  applyTheme() {
    this.themeService.toggleTheme(this.themeToggle);
  }
  BackBtn(){
    history.back()
  }

  

}
