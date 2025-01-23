import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons } from '@ionic/angular/standalone';
import { AppearanceButtonComponent } from 'src/app/components/appearance-button/appearance-button.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: true,
  imports: [IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, AppearanceButtonComponent]
})
export class ProfilePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
