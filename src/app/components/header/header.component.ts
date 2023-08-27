import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() 
  theme: string = "dark";

  app_name = 'News Posts'

  checked = false;

  constructor(private themeService: ThemeService) {
    this.theme = this.themeService.theme;
  }

  ngOnInit() {
    this.checked = this.theme === 'light';
  }

  changeTheme() {
    this.themeService.changeTheme();
    this.theme = this.themeService.theme;
  }
}
