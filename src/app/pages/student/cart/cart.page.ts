import { Component, OnInit } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.page.html",
  styleUrls: ["./cart.page.scss"],
  standalone: true,
  imports: [
    SharedModule
  ],
})
export class CartPage implements OnInit {
  constructor() {}

  ngOnInit() {}
}
