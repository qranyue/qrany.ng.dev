import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'login', loadComponent: async () => (await import('./pages/account/login/login.component')).LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];
