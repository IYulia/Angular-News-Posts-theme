import { Component } from '@angular/core';
import { ThemeService } from '../services/theme.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'meet3';
  theme: string;

  constructor(public themeService: ThemeService) {
    this.theme = this.themeService.theme;
  }
}