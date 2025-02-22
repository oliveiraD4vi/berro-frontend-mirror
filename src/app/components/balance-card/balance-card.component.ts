import { Component } from '@angular/core';

@Component({
  selector: 'app-balance-card',
  templateUrl: './balance-card.component.html',
  styleUrls: ['./balance-card.component.scss'],
  imports: []
})
export class BalanceCardComponent {
  balance: number = 6.233;
}
