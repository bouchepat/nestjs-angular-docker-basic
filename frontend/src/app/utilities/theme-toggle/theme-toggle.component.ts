import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [],
  templateUrl: './theme-toggle.component.html',
  styleUrl: './theme-toggle.component.scss'
})
export class ThemeToggleComponent implements OnInit {
  private currentTheme: 'light' | 'dark' = 'light';

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    if (!this.appService.isBrowser) return;

    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark';
    if (savedTheme) {
      this.currentTheme = savedTheme;
    } else {
      localStorage.setItem('theme', this.currentTheme);
    }
  }

  toggleTheme(): void {
    if (!this.appService.isBrowser) return;

    this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    this.applyTheme(this.currentTheme);
    localStorage.setItem('theme', this.currentTheme);
  }

  private applyTheme(theme: 'light' | 'dark'): void {
    if (!this.appService.isBrowser) return;

    document.documentElement.setAttribute('data-bs-theme', theme);
  }
}