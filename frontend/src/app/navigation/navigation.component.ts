import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ThemeToggleComponent } from '../utilities/theme-toggle/theme-toggle.component';
import { AppService } from '../app.service';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [RouterLink, ThemeToggleComponent],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent implements OnInit, AfterContentChecked {

  constructor(private appService: AppService) { }

  ngAfterContentChecked(): void {
    if (!this.appService.isBrowser) return;

    const navbarLinks = document.getElementById('main-navbar-links');
    navbarLinks?.classList.remove('invisible');
  }

  ngOnInit(): void {
    if (!this.appService.isBrowser) return;

    const theme = localStorage.getItem('theme') as 'light' | 'dark' || 'light';

    const navbar = document.getElementById('main-navbar');
    navbar?.setAttribute('data-bs-theme', theme);
  }
}
