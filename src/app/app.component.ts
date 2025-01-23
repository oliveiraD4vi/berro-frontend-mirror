import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { cartOutline, glasses, homeOutline, logoBitcoin, personCircle, personCircleOutline, roseOutline, sunny, sunnyOutline } from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor() {
    addIcons({ personCircle, personCircleOutline, sunny, sunnyOutline, roseOutline, homeOutline, cartOutline, logoBitcoin, glasses });
  }
}
