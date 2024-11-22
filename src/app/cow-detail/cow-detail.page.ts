import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-cow-detail',
  templateUrl: './cow-detail.page.html',
  styleUrls: ['./cow-detail.page.scss'],
})
export class CowDetailPage implements OnInit {
  imageSrc: string | ArrayBuffer | null = "../../assets/images/no-preview.jpeg";
  loading: any;

  themeToggle: boolean;
  
  ngOnInit() {
    this.themeService.toggleTheme(this.themeToggle);
  }
  
  BackBtn(){
    history.back()
  }
   // Variable to hold loading instance

  constructor(private loadingController: LoadingController , private themeService: ThemeService) {
    this.themeToggle = this.themeService.isDark();
  }


  // Function to handle file selection
  async onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();

      // Show loading indicator
      this.loading = await this.loadingController.create({
        message: 'Loading image...',
      });
      await this.loading.present();

      // Read the file as a data URL
      reader.onload = async (e) => {
        this.imageSrc = e.target?.result as string; // Set the image source
        await this.loading.dismiss(); // Dismiss the loading indicator
      };

      reader.readAsDataURL(file); // Read the file
    }
  }

}
