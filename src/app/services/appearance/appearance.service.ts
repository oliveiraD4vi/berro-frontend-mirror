import { Injectable, signal } from '@angular/core';
import { LocalStorageService } from '../storage/local-storage.service';
import { StorageKeys, Theme } from 'src/app/utils/constants';

@Injectable({
  providedIn: 'root'
})
export class AppearanceService {
  $paletteToggle = signal<boolean>(false);

  constructor(private storage: LocalStorageService) {}

  public initTheme() {
    const theme = this.storage.getItem(StorageKeys.THEME);

    if (!theme) {
      this.checkSystemPreference();
    } else {
      this.initializeDarkPalette(theme === Theme.DARK);
    }
  }

  private checkSystemPreference() {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

    this.initializeDarkPalette(prefersDark.matches);

    if (prefersDark.matches) {
      this.storage.setItem(StorageKeys.THEME, Theme.DARK);
    } else {
      this.storage.setItem(StorageKeys.THEME, Theme.LIGHT);
    }
  }

  private initializeDarkPalette(isDark: boolean) {
    this.$paletteToggle.set(isDark);
    this.toggleDarkPalette(isDark);
  }

  public toggleChange(event: CustomEvent) {
    this.toggleDarkPalette(event.detail.checked);

    if (this.$paletteToggle()) {
      this.storage.setItem(StorageKeys.THEME, Theme.DARK);
    } else {
      this.storage.setItem(StorageKeys.THEME, Theme.LIGHT);
    }
  }

  private toggleDarkPalette(shouldAdd: boolean) {
    this.$paletteToggle.set(shouldAdd);
    document.documentElement.classList.toggle("ion-palette-dark", shouldAdd);
  }
}
