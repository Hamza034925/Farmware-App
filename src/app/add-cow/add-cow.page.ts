import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-add-cow',
  templateUrl: './add-cow.page.html',
  styleUrls: ['./add-cow.page.scss'],
})
export class AddCowPage implements OnInit {
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

  Back(){
    history.back()
  }

}
