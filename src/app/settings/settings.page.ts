import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  themeToggle: boolean;

  constructor(private themeService: ThemeService) {
    this.themeToggle = this.themeService.isDark();
  }
  
  
  ngOnInit() {
    this.themeService.toggleTheme(this.themeToggle);
    // Additional initialization if needed
  }
  toggleChange(ev: any) {
    this.themeService.toggleTheme(ev.detail.checked);
  }
  BackBtn(){
    history.back()
  }



}
