import { AuthService } from "src/app/services/auth/auth.service";
import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import {
  IonInputPasswordToggle,
  IonContent,
  IonHeader,
  IonToolbar,
  IonImg,
  IonButtons,
  IonBackButton,
  IonButton,
  IonCard,
  IonCardContent,
  IonList,
  IonItem,
  IonInput, IonIcon, IonFooter, IonText, IonCardHeader, IonCardTitle } from "@ionic/angular/standalone";
import { Roles, UTILS } from "src/app/utils/constants";
import { RouterLink } from "@angular/router";
import { PhrasesComponent } from "../../../components/phrases/phrases.component";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
  standalone: true,
  imports: [IonCardTitle, IonCardHeader, IonText, IonFooter, IonIcon,
    IonInput,
    IonItem,
    IonList,
    IonCardContent,
    IonCard,
    IonButton,
    IonBackButton,
    IonButtons,
    IonImg,
    IonContent,
    IonHeader,
    IonToolbar,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonInputPasswordToggle,
    RouterLink, PhrasesComponent],
})
export class LoginPage {
  fb = inject(FormBuilder);

  loginForm: FormGroup = this.fb.group({
    email: ["", [Validators.required, Validators.email]],
    password: ["", Validators.required],
    rememberPassword: [false],
  });

  roles = Roles;

  constructor(private authService: AuthService) {}

  onSubmit(e: Event) {
    e.preventDefault();

    if (this.loginForm.invalid) {
      UTILS.validateGenericForm(this.loginForm);
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
