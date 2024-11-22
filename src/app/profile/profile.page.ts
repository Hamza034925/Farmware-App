import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  themeToggle: boolean;

  constructor(private themeService: ThemeService) {
    this.themeToggle = this.themeService.isDark();
  }
  ngOnInit() {
    this.themeService.toggleTheme(this.themeToggle);
  }

  BackBtn(){
    history.back()
  }

}
