import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-medical-records',
  templateUrl: './medical-records.page.html',
  styleUrls: ['./medical-records.page.scss'],
})
export class MedicalRecordsPage implements OnInit {

  themeToggle: boolean;

  constructor(private themeService: ThemeService  ) {
    this.themeToggle = this.themeService.isDark();
  }
  
  
  ngOnInit() {
    this.themeService.toggleTheme(this.themeToggle);
    // Additional initialization if needed
  }
  BackBtn(){
    history.back()
  }

}
