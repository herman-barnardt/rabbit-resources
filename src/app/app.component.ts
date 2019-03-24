import { Component } from '@angular/core';
import { AuthenticationService } from './services/authentication/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: any;
  title = 'Retro Rabbit Resources';

  constructor(private authService: AuthenticationService) { }

  login() {
    this.authService.login();
    this.authService.user.subscribe(user => this.user = user);
  }

  logout() {
    this.authService.logout();
    this.authService.user.subscribe(user => this.user = user);
  }
}
