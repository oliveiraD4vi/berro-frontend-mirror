import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private storage: Storage;

  [name: string]: unknown;

  length = 0;

  constructor() {
    this.storage = localStorage;
  }

  clear(): void {
    this.storage.clear();
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getItem(key: string): any {
    const storageData = this.storage.getItem(key);

    if (storageData) {
      return JSON.parse(storageData);
    }

    return null;
  }

  key(index: number): string | null {
    return this.storage.key(index);
  }

  removeItem(key: string): void {
    return this.storage.removeItem(key);
  }

  setItem(key: string, value: unknown): void {
    return this.storage.setItem(key, JSON.stringify(value));
  }
}
