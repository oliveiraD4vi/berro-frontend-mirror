import { Component, OnInit } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";

@Component({
  selector: "app-users",
  templateUrl: "./users.page.html",
  styleUrls: ["./users.page.scss"],
  standalone: true,
  imports: [
    SharedModule
  ],
})
export class UsersPage implements OnInit {
  constructor() {}

  ngOnInit() {}
}
