import { Component, OnInit } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";

@Component({
  selector: "app-logs",
  templateUrl: "./logs.page.html",
  styleUrls: ["./logs.page.scss"],
  standalone: true,
  imports: [
    SharedModule
  ],
})
export class LogsPage implements OnInit {
  constructor() {}

  ngOnInit() {}
}
