import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [FontAwesomeModule, NgClass],
  templateUrl: './theme-toggle.component.html',
  styleUrl: './theme-toggle.component.scss'
})
export class ThemeToggleComponent implements OnInit {
  dark = faMoon;
  light = faSun;

  constructor(private appService: AppService) { }

  get CurrentTheme() {
    if (!this.appService.isBrowser) return;

    return localStorage?.getItem('theme');
  }

  ngOnInit(): void {
    if (!this.appService.isBrowser) return;

    const theme = (localStorage.getItem('theme') as 'light' | 'dark') || 'light';

    localStorage.setItem('theme', theme);
  }

  toggleTheme(theme: 'dark' | 'light'): void {
    if (!this.appService.isBrowser) return;

    // Validate theme parameter
    if (theme !== 'dark' && theme !== 'light') {
      console.error('Invalid theme value:', theme);
      return;
    }

    document.documentElement.setAttribute('data-bs-theme', theme);
    const navbar = document.getElementById('main-navbar');
    if (navbar) {
      navbar.setAttribute('data-bs-theme', theme);
    }

    localStorage.setItem('theme', theme);
  }
}