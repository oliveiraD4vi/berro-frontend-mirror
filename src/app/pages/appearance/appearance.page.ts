import { Component, effect } from "@angular/core";
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
  IonToggle,
} from "@ionic/angular/standalone";
import { AppearanceService } from "src/app/services/appearance/appearance.service";

@Component({
  selector: "app-appearance",
  templateUrl: "./appearance.page.html",
  styleUrls: ["./appearance.page.scss"],
  standalone: true,
  imports: [
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
  paletteToggle = false;

  constructor(private appearance: AppearanceService) {
    effect(() => {
      this.paletteToggle = this.appearance.$paletteToggle();
    });
  }

  toggleChange(event: CustomEvent) {
    this.appearance.toggleChange(event);
  }
}
