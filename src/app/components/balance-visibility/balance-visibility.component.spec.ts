import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";

import { BalanceVisibilityComponent } from "./balance-visibility.component";

describe("BalanceVisibilityComponent", () => {
  let component: BalanceVisibilityComponent;
  let fixture: ComponentFixture<BalanceVisibilityComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [BalanceVisibilityComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(BalanceVisibilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
