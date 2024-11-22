import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  themeToggle: boolean;

  constructor(private themeService: ThemeService) {
    this.themeToggle = this.themeService.isDark();
  }
  
  
  ngOnInit() {
    this.themeService.toggleTheme(this.themeToggle);
    // Additional initialization if needed
  }

}
