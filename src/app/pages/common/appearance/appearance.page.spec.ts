import { ComponentFixture, TestBed } from "@angular/core/testing";
import { AppearancePage } from "./appearance.page";

describe("appearancePage", () => {
  let component: AppearancePage;
  let fixture: ComponentFixture<AppearancePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AppearancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
