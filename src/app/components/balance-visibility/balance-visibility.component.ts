import { Component } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-balance-visibility',
  templateUrl: './balance-visibility.component.html',
  styleUrls: ['./balance-visibility.component.scss'],
  imports: [SharedModule]
})
export class BalanceVisibilityComponent {
  isVisible: boolean = false;

  constructor() {}

  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }
}
