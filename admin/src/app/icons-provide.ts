import { importProvidersFrom } from '@angular/core';
import { LockOutline, UserOutline } from '@ant-design/icons-angular/icons';
import { NzIconModule } from 'ng-zorro-antd/icon';

export const provideNzIcons = () => {
  return importProvidersFrom(NzIconModule.forChild([UserOutline, LockOutline]));
};
