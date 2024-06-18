import { Component, inject } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AccountService } from '_/service/account.service';
import { NzButtonComponent } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputGroupComponent, NzInputModule } from 'ng-zorro-antd/input';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NzButtonComponent, NzFormModule, NzInputGroupComponent, NzInputModule, NzTypographyModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  form = inject(NonNullableFormBuilder).group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  loading = false;

  private readonly $login = inject(AccountService).login;

  async onSubmit() {
    if (!this.form.valid) return this.form.updateValueAndValidity();
    this.loading = true;
    this.$login(this.form.getRawValue()).subscribe({
      complete: () => (this.loading = false),
      error: () => (this.loading = false),
    });
  }
}
