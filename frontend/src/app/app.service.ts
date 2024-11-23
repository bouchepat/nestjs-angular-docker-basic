import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(@Inject(PLATFORM_ID) private platformId: object) { }

  public get isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

}
