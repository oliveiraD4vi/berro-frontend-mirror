import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonToolbar, IonButton, IonButtons} from '@ionic/angular/standalone';
import { AppearanceButtonComponent } from 'src/app/components/appearance-button/appearance-button.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.page.html',
  styleUrls: ['./steps.page.scss'],
  standalone: true,
  imports: [IonButtons, IonButton, IonContent, IonHeader, IonToolbar, CommonModule, FormsModule, AppearanceButtonComponent, RouterLink]
})
export class StepsPage {
  constructor() {}
}
