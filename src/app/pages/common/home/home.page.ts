import { IonButtons } from '@ionic/angular/standalone';
import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { AppearanceButtonComponent } from 'src/app/components/appearance-button/appearance-button.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, AppearanceButtonComponent, IonButtons],
})
export class HomePage {
  constructor() {}
}
