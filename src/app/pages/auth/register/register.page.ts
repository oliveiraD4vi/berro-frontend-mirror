import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonContent, IonHeader, IonToolbar } from "@ionic/angular/standalone";

@Component({
  selector: "app-register",
  templateUrl: "./register.page.html",
  styleUrls: ["./register.page.scss"],
  standalone: true,
  imports: [IonContent, IonHeader, IonToolbar, CommonModule, FormsModule],
})
export class RegisterPage {
  constructor() {}
}
