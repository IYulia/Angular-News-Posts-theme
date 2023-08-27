import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  public theme  =  "dark"
  constructor() { 
    this.getTheme()
  }
  getTheme(){
    if(localStorage.getItem('theme') && this.theme != localStorage.getItem('theme')){
      this.theme = localStorage.getItem('theme') || 'dark'
    }
  }

  changeTheme(){
    if(this.theme === "dark"){
      this.theme = "light"
    }else{
      this.theme = "dark"
    }
    localStorage.setItem('theme', this.theme)
  }
}
