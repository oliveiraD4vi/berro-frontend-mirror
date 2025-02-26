import { CurrencyPipe } from '@angular/common';
import { StateService } from './../../services/state/state.service';
import { Component, inject } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-balance-card',
  templateUrl: './balance-card.component.html',
  styleUrls: ['./balance-card.component.scss'],
  imports: [CurrencyPipe]
})
export class BalanceCardComponent {
  state = inject(StateService);
  auth = inject(AuthService);

  balance: number = 0;
  isVisible: boolean = false;

  constructor() {
    this.state.showBalance$.subscribe(show => {
      this.isVisible = show;
    });

    this.auth.user$.subscribe(data => {
      if (data?.balance) {
        this.balance = data.balance;
      }
    });
  }
}
