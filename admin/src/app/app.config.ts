import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttp } from './http-provide';
import { provideNzIcons } from './icons-provide';

export const appConfig: ApplicationConfig = {
  providers: [provideHttp(), provideNzIcons(), provideRouter(routes), provideZoneChangeDetection({ eventCoalescing: true })],
};
