import { Component, OnInit } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";

@Component({
  selector: "app-requests",
  templateUrl: "./requests.page.html",
  styleUrls: ["./requests.page.scss"],
  standalone: true,
  imports: [
    SharedModule
  ],
})
export class RequestsPage implements OnInit {
  constructor() {}

  ngOnInit() {}
}
