import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import {
  IonContent,
  IonHeader,
  IonToolbar, IonButtons, IonBackButton, IonImg, IonFooter, IonText, IonCard, IonCardHeader, IonCardTitle } from "@ionic/angular/standalone";

@Component({
  selector: "app-recover",
  templateUrl: "./recover.page.html",
  styleUrls: ["./recover.page.scss"],
  standalone: true,
  imports: [IonCardTitle, IonCardHeader, IonCard, IonText, IonFooter, IonImg, IonBackButton, IonButtons,
    IonContent,
    IonHeader,
    IonToolbar,
    CommonModule,
    FormsModule,
  ],
})
export class RecoverPage implements OnInit {
  constructor() {}

  ngOnInit() {}
}
