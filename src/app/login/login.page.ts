import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  themeToggle: boolean;

  constructor(private themeService: ThemeService) {
    this.themeToggle = this.themeService.isDark();
  }
  
  
  ngOnInit() {
    this.themeService.toggleTheme(this.themeToggle);
    // Additional initialization if needed
  }

}
