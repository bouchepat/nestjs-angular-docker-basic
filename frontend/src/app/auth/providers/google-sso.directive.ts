import { Directive, HostListener, inject } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { GoogleAuthProvider, signInWithPopup } from "@firebase/auth";
import { AuthService } from '../auth.service';

@Directive({
  selector: '[GoogleSso]',
  standalone: true
})
export class GoogleSsoDirective {
  private auth = inject(Auth);
  private authService = inject(AuthService);

  @HostListener("click") async onClick() {
    try {

      const provider = new GoogleAuthProvider();
      const creds = await signInWithPopup(this.auth, provider);
      console.log('User signed in:', creds.user);

      this.authService.setUser(creds.user);

    } catch (error) {
      console.error('Sign-in error:', error);
    }
  }

}
