import { Injectable } from '@angular/core';
import { Auth, onAuthStateChanged, User } from '@angular/fire/auth';
import { AppService } from '../app.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: User | null = null;
  private tokenExpiration: number | null = null;

  constructor(private auth: Auth, private appService: AppService) {
    if (!this.appService.isBrowser) return;

    this.initializeAuthStateListener();
    this.initializeTokenRefresh();
  }

  get User() {
    return this.user;
  }

  public async setUser(user: User): Promise<void> {
    if (this.user?.uid === user.uid) return;

    this.user = user;
    try {
      const token = await user.getIdToken();
      this.saveToken(token);
    } catch (error) {
      console.error('Error fetching token:', error);
    }
  }

  public logout(): void {
    this.user = null;
    this.tokenExpiration = null;
    this.clearToken();
    this.auth.signOut();
  }

  private initializeAuthStateListener(): void {
    onAuthStateChanged(this.auth, async (user) => {
      if (user) {
        this.setUser(user);
        this.refreshToken();
      } else {
        this.clearToken();
      }
    });
  }

  private initializeTokenRefresh(): void {
    setInterval(() => {
      if (this.shouldRefreshToken()) {
        this.refreshToken();
      }
    }, 5 * 60 * 1000); // Check every 5 minutes
  }

  private async refreshToken(): Promise<void> {
    const user = this.auth.currentUser;
    if (user) {
      try {
        const token = await user.getIdToken(true); // Force refresh
        const decodedToken = JSON.parse(atob(token.split('.')[1])); // Decode JWT
        this.tokenExpiration = decodedToken.exp * 1000; // Expiry in ms        
        this.saveToken(token);
      } catch (error) {
        console.error('Error refreshing token:', error);
      }
    }
  }

  private shouldRefreshToken(): boolean {
    if (!this.tokenExpiration) return true;

    const now = Date.now();
    return this.tokenExpiration - now < 5 * 60 * 1000; // Refresh if less than 5 minutes left
  }

  private saveToken(token: string): void {
    if (!this.appService.isBrowser) return;
    localStorage.setItem('authToken', token);
  }

  getToken(): string | null {
    if (!this.appService.isBrowser) return null;

    return localStorage.getItem('authToken');
  }

  private clearToken(): void {
    if (!this.appService.isBrowser) return;

    localStorage.removeItem('authToken');
  }
}
