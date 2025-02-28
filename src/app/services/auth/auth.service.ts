import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { LocalStorageService } from "../storage/local-storage.service";
import { Router } from "@angular/router";
import { Roles, StorageKeys, URL } from "src/app/utils/constants";
import { User } from "../../@types/auth/auth";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  isLogged: boolean = false;
  roles = Roles;
  role: string = Roles.ALUMN;
  name: string = "";

  // STARTS USER DATA
  private userSubject: BehaviorSubject<User | null> =
    new BehaviorSubject<User | null>(null);
  user$ = this.userSubject.asObservable();

  setUser(data: User | null) {
    this.isLogged = Boolean(data);

    if (data?.role) {
      this.role = data.role;
      this.name = data.name;
    }

    this.userSubject.next(data);
  }
  // END USER DATA

  constructor(
    private storage: LocalStorageService,
    private router: Router
  ) {
    const data: User | null = this.storage.getItem(StorageKeys.USER);

    this.setUser(data);
  }

  logout() {
    this.storage.removeItem(StorageKeys.USER);
    this.storage.removeItem(StorageKeys.TOKEN);
    this.storage.removeItem(StorageKeys.CART);
    this.setUser(null);
    URL.SET_TENANT(null);
    this.router.navigate(["/s/a/login"]);
  }

  saveData(data: User) {
    const { token } = data;

    this.storage.setItem(StorageKeys.USER, data);
    this.storage.setItem(StorageKeys.TOKEN, token);
    this.setUser(data);
    URL.SET_TENANT(data.tenant);
    this.router.navigate(["/u/t/home"]);
  }
}
