import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private readonly $http = inject(HttpClient);

  login(form: { username: string; password: string }) {
    console.log(this.$http, form);
    return this.$http.post<void>('account/login', form);
  }
}
