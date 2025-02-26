import { Component, EnvironmentInjector, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonRouterOutlet } from "@ionic/angular/standalone";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.page.html",
  styleUrls: ["./auth.page.scss"],
  standalone: true,
  imports: [IonRouterOutlet, CommonModule, FormsModule],
})
export class AuthPage {
  public environmentInjector = inject(EnvironmentInjector);

  constructor() {}
}
