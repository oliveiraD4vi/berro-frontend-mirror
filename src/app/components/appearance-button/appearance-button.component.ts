import { Component, OnInit } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";

@Component({
  selector: "app-appearance-button",
  templateUrl: "./appearance-button.component.html",
  styleUrls: ["./appearance-button.component.scss"],
  imports: [SharedModule],
})
export class AppearanceButtonComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
