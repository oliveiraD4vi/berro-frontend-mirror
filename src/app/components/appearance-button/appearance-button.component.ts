import { IonButton, IonIcon } from "@ionic/angular/standalone";
import { Component, OnInit } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-appearance-button",
  templateUrl: "./appearance-button.component.html",
  styleUrls: ["./appearance-button.component.scss"],
  imports: [IonButton, IonIcon, RouterLink],
})
export class AppearanceButtonComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
