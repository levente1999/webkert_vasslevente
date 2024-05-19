import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'kotprog';
  loggedInUser?: firebase.default.User | null;

  selectedComponent: string = 'home';

  constructor(private authService: AuthService) {

  }
  ngOnInit(): void {
    /*this.authService.isUserLoggedIn().subscribe(user => {
      console.log(user);
      this.loggedInUser = user;
      localStorage.setItem('user', JSON.stringify(this.loggedInUser));
    }, error => {
      console.error(error);
      localStorage.setItem('user', JSON.stringify('null'));
    });*/
  }

  onComponentSelected(componentName: string) {
    this.selectedComponent = componentName;
  }

  logout() {
    this.authService.logout();
  }
}
