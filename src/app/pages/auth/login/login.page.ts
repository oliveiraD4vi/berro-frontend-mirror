import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonToolbar, IonButtons, IonButton } from '@ionic/angular/standalone';
import { AppearanceButtonComponent } from "../../../components/appearance-button/appearance-button.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonButton, IonButtons, IonContent, IonHeader, IonToolbar, CommonModule, FormsModule, AppearanceButtonComponent, RouterLink]
})
export class LoginPage {
  constructor() {}
}
