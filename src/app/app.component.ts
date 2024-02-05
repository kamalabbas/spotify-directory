import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentTheme = 'dark';
  title = 'spotify-directory';

  handleSetSwtichTheme() {    
    this.currentTheme = this.currentTheme == 'dark' ? 'light' : 'dark';    
  }
}
