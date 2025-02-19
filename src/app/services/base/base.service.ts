/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable, REQUEST } from '@angular/core';
import { map, Observable } from 'rxjs';
import { StateService } from '../state/state.service';
import { StorageKeys, URL } from 'src/app/utils/constants';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  constructor(
    @Inject(REQUEST) private request: Request,
    private http: HttpClient,
    private stateService: StateService
  ) {}

  get BASE_URL() {
    return URL.BASE_URL();
  }

  getToken() {
    let token;

    const tokenString = localStorage.getItem(StorageKeys.TOKEN);

    if (tokenString) {
      token = JSON.parse(tokenString);
    }

    if (token) {
      return {
        headers: new HttpHeaders()
          .set("Authorization", `Bearer ${token}`)
          .set("Content-Type", "application/json;charset=UTF-8")
          .set("x-tenant-id", URL.TENANT()),
      };
    } else {
      return {
        headers: new HttpHeaders().set("x-tenant-id", URL.TENANT()),
      };
    }
  }

  public get(endpoint: string, options?: object): Observable<any> {
    const authToken = this.getToken();
    return this.http
      .get(endpoint, {
        ...authToken,
        ...options,
      })
      .pipe(map((res: any) => (res ? Object.assign(res) : "")));
  }

  public post(endpoint: string, body: any, options?: object): Observable<any> {
    const authToken = this.getToken();
    return this.http
      .post(endpoint, body, {
        ...authToken,
        ...options,
      })
      .pipe(map((res: any) => (res ? Object.assign(res) : "")));
  }

  public put(endpoint: string, body: any, options?: object): Observable<any> {
    const authToken = this.getToken();
    return this.http
      .put(endpoint, body, {
        ...authToken,
        ...options,
      })
      .pipe(map((res: any) => (res ? Object.assign(res) : "")));
  }

  public delete(endpoint: string, options?: object): Observable<any> {
    const authToken = this.getToken();
    return this.http
      .delete(endpoint, {
        ...authToken,
        ...options,
      })
      .pipe(map((res: any) => (res ? Object.assign(res) : "")));
  }

  public options(endpoint: string, options?: object): Observable<any> {
    const authToken = this.getToken();
    return this.http
      .options(endpoint, {
        ...authToken,
        ...options,
      })
      .pipe(map((res: any) => (res ? Object.assign(res) : "")));
  }
}
