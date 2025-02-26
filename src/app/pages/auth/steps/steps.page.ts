import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonImg,
  IonFooter,
  IonButton,
  IonText,
} from "@ionic/angular/standalone";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-steps",
  templateUrl: "./steps.page.html",
  styleUrls: ["./steps.page.scss"],
  standalone: true,
  imports: [
    IonText,
    IonButton,
    IonFooter,
    IonImg,
    IonContent,
    IonHeader,
    IonToolbar,
    CommonModule,
    FormsModule,
    RouterLink,
  ],
})
export class StepsPage {
  constructor() {}
}
