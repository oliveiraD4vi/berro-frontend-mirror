import { Component, OnInit } from "@angular/core";
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
export class AppearancePage implements OnInit {
  paletteToggle = false;

  constructor() {}

  ngOnInit() {
    this.paletteToggle = !!window.document.querySelector(".ion-palette-dark");

    // TOP BE IMPLEMENTED LATER
    // this.checkSystemPreference();
  }

  checkSystemPreference() {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

    this.initializeDarkPalette(prefersDark.matches);

    prefersDark.addEventListener("change", (mediaQuery) =>
      this.initializeDarkPalette(mediaQuery.matches)
    );
  }

  initializeDarkPalette(isDark: boolean) {
    this.paletteToggle = isDark;
    this.toggleDarkPalette(isDark);
  }

  toggleChange(event: CustomEvent) {
    this.toggleDarkPalette(event.detail.checked);
  }

  toggleDarkPalette(shouldAdd: boolean) {
    document.documentElement.classList.toggle("ion-palette-dark", shouldAdd);
  }
}
