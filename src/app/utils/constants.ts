/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from "@angular/core";
import { environment } from "./../../environments/environment";

@Injectable()
export class UTILS {
  public static validateGenericForm(form: any) {
    Object.keys(form.controls).forEach((field: any) => {
      const control = form.get(field);
      control.markAsTouched();
    });
  }
}

@Injectable()
export class URL {
  public static BASE_URL(): string {
    return `${environment.protocol}.${environment.baseUrl}`;
  }

  public static TENANT(): string {
    // HAVE TO LOAD THE CORRECT TENANT FROM STORAGE
    return "ifce-taua";
  }

  public static SET_TENANT(): void {
    // HAVE TO SAVE THE CORRECT TENANT FROM STORAGE
  }
}

export class StorageKeys {
  public static TOKEN = "TOKEN";
  public static USER = "USER";
  public static CART = "CART";
}

// export class Configs {
//   // CONFIGS
// }

// export const IC: IConfig = {
//   // CONFIG TYPE
// };
