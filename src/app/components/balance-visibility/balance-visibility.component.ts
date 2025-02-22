import { IonButton } from '@ionic/angular/standalone';
import { IonIcon } from '@ionic/angular/standalone';
import { Component } from '@angular/core';

@Component({
  selector: 'app-balance-visibility',
  templateUrl: './balance-visibility.component.html',
  styleUrls: ['./balance-visibility.component.scss'],
  imports: [IonIcon, IonButton]
})
export class BalanceVisibilityComponent {
  isVisible: boolean = false;

  constructor() {}

  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }
}
