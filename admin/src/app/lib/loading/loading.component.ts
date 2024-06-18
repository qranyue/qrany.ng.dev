import { Component } from '@angular/core';
import { NzSpinComponent } from 'ng-zorro-antd/spin';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [NzSpinComponent, NzTypographyModule],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.css',
})
export class LoadingComponent {}
