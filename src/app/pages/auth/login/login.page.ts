import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonToolbar, IonButtons } from '@ionic/angular/standalone';
import { AppearanceButtonComponent } from "../../../components/appearance-button/appearance-button.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonButtons, IonContent, IonHeader, IonToolbar, CommonModule, FormsModule, AppearanceButtonComponent]
})
export class LoginPage {
  constructor() {}
}
