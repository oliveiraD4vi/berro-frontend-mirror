import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BalanceCardComponent } from '../components/balance-card/balance-card.component';
import { AppearanceButtonComponent } from '../components/appearance-button/appearance-button.component';
import { BalanceVisibilityComponent } from '../components/balance-visibility/balance-visibility.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// STANDALONE IONIC COMPONENTS
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonText,
  IonLabel,
  IonIcon,
  IonRange,
  IonToggle,
  IonListHeader,
  IonItem,
  IonList,
  IonBackButton,
  IonTabs,
  IonTabBar,
  IonTabButton
} from "@ionic/angular/standalone";
import { RouterLink } from '@angular/router';

@NgModule({
    declarations: [],
    imports: [
      RouterLink,
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      BalanceCardComponent,
      BalanceVisibilityComponent,
      AppearanceButtonComponent,
      IonContent,
      IonHeader,
      IonTitle,
      IonToolbar,
      IonButtons,
      IonText,
      IonLabel,
      IonIcon,
      IonRange,
      IonToggle,
      IonListHeader,
      IonItem,
      IonList,
      IonBackButton,
      IonTabs,
      IonTabBar,
      IonTabButton
    ],
    providers: [],
    exports: [
      RouterLink,
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      BalanceCardComponent,
      BalanceVisibilityComponent,
      AppearanceButtonComponent,
      IonContent,
      IonHeader,
      IonTitle,
      IonToolbar,
      IonButtons,
      IonText,
      IonLabel,
      IonIcon,
      IonRange,
      IonToggle,
      IonListHeader,
      IonItem,
      IonList,
      IonBackButton,
      IonTabs,
      IonTabBar,
      IonTabButton
    ]
})
export class SharedModule {}
