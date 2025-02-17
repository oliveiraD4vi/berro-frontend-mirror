import { Component, OnInit } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";

@Component({
  selector: "app-products",
  templateUrl: "./products.page.html",
  styleUrls: ["./products.page.scss"],
  standalone: true,
  imports: [
    SharedModule
  ],
})
export class ProductsPage implements OnInit {
  constructor() {}

  ngOnInit() {}
}
