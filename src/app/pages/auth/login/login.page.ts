import { AuthService } from "src/app/services/auth/auth.service";
import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormBuilder, FormGroup, FormsModule, Validators } from "@angular/forms";
import {
  IonContent,
  IonHeader,
  IonToolbar, IonImg, IonButtons, IonBackButton } from "@ionic/angular/standalone";
import { Roles } from "src/app/utils/constants";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
  standalone: true,
  imports: [
    IonBackButton, IonButtons, IonImg,
    IonContent,
    IonHeader,
    IonToolbar,
    CommonModule,
    FormsModule,
  ],
})
export class LoginPage {
  fb = inject(FormBuilder);

  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    rememberPassword: [false],
  });

  roles = Roles;

  constructor(private authService: AuthService) {}

  onSubmit(e: Event) {
    e.preventDefault();

    if (this.loginForm.invalid) {
      return;
    }

    this.login(this.roles.ALUMN);
  }

  login(role: string) {
    this.authService.saveData({
      id: 1,
      name: "Davi",
      email: "",
      token: "",
      tenant: "IFCE-TAUA",
      role,
    });
  }
}
