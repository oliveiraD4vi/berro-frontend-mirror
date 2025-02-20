import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonButtons,
} from "@ionic/angular/standalone";
import { AppearanceButtonComponent } from "src/app/components/appearance-button/appearance-button.component";

@Component({
  selector: "app-steps",
  templateUrl: "./steps.page.html",
  styleUrls: ["./steps.page.scss"],
  standalone: true,
  imports: [
    IonButtons,
    IonContent,
    IonHeader,
    IonToolbar,
    CommonModule,
    FormsModule,
    AppearanceButtonComponent,
  ],
})
export class StepsPage {
  constructor() {}
}
