import { Component, OnInit } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";

@Component({
  selector: "app-balance",
  templateUrl: "./balance.page.html",
  styleUrls: ["./balance.page.scss"],
  standalone: true,
  imports: [
    SharedModule
  ],
})
export class BalancePage implements OnInit {
  constructor() {}

  ngOnInit() {}
}
