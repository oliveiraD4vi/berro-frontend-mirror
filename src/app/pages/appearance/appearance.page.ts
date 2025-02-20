import { Component, effect, inject } from "@angular/core";
import { FormsModule } from "@angular/forms";
import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonTitle,
  IonList,
  IonContent,
  IonItem,
  IonToggle, IonButton } from "@ionic/angular/standalone";
import { AppearanceService } from "src/app/services/appearance/appearance.service";
import { AuthService } from "src/app/services/auth/auth.service";

@Component({
  selector: "app-appearance",
  templateUrl: "./appearance.page.html",
  styleUrls: ["./appearance.page.scss"],
  standalone: true,
  imports: [IonButton,
    FormsModule,
    IonToggle,
    IonItem,
    IonContent,
    IonList,
    IonTitle,
    IonBackButton,
    IonButtons,
    IonToolbar,
    IonHeader,
  ],
})
export class AppearancePage {
  authService = inject(AuthService);
  appearance = inject(AppearanceService);

  paletteToggle = false;

  constructor() {
    effect(() => {
      this.paletteToggle = this.appearance.$paletteToggle();
    });
  }

  toggleChange(event: CustomEvent) {
    this.appearance.toggleChange(event);
  }
}
