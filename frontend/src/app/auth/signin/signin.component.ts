import { Component } from '@angular/core';
import { GoogleSsoDirective } from '../providers/google-sso.directive';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [GoogleSsoDirective],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss'
})
export class SigninComponent {

  constructor() {
  }

}
