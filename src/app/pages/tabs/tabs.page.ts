import { Component, EnvironmentInjector, inject } from "@angular/core";
import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
} from "@ionic/angular/standalone";
import { addIcons } from "ionicons";
import { triangle, ellipse, square } from "ionicons/icons";
import { AuthService } from "src/app/services/auth/auth.service";
import { Roles } from "src/app/utils/constants";

@Component({
  selector: "app-tabs",
  templateUrl: "tabs.page.html",
  styleUrls: ["tabs.page.scss"],
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon],
})
export class TabsPage {
  roles = Roles;
  userRole: string = Roles.ALUMN;

  public environmentInjector = inject(EnvironmentInjector);

  constructor(
    private authService: AuthService
  ) {
    addIcons({ triangle, ellipse, square });

    this.authService.user$.subscribe((data) => {
      if (data?.role) {
        this.userRole = data?.role;
      }
    });
  }
}
