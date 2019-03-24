import { Component } from '@angular/core';
import { AuthenticationService } from './services/authentication/authentication.service';
import { OverlayContainer } from '@angular/cdk/overlay';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: any;
  title = 'Rabbit Resources';

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private authService: AuthenticationService) { }

  login() {
    this.authService.login();
    this.authService.user.subscribe(user => this.user = user);
  }

  logout() {
    this.authService.logout();
    this.authService.user.subscribe(user => this.user = user);
  }
}
