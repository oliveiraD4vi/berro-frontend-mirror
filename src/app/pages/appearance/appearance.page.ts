import { Component, inject } from "@angular/core";
import { FormsModule } from "@angular/forms";
import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonTitle,
  IonList,
  IonContent,
  IonButton
} from "@ionic/angular/standalone";
import { AuthService } from "src/app/services/auth/auth.service";

@Component({
  selector: "app-appearance",
  templateUrl: "./appearance.page.html",
  styleUrls: ["./appearance.page.scss"],
  standalone: true,
  imports: [IonButton,
    FormsModule,
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
}
