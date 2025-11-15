import { Component } from '@angular/core';
import { GoogleSsoDirective } from '../providers/google-sso.directive';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [GoogleSsoDirective, FontAwesomeModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss'
})
export class SigninComponent {
  faGoogle = faGoogle;

  constructor() { }
}
