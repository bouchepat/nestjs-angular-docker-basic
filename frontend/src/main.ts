/// <reference types="@angular/localize" />

import 'bootstrap';
// Note: Bootstrap includes Popper.js automatically for dropdowns and popovers
// If you need Popper.js functionality directly, import specific exports instead:
// import { createPopper } from '@popperjs/core';

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
