import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmazonTodayDealComponent } from './amazon-today-deal.component';

describe('AmazonTodayDealComponent', () => {
  let component: AmazonTodayDealComponent;
  let fixture: ComponentFixture<AmazonTodayDealComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AmazonTodayDealComponent]
    });
    fixture = TestBed.createComponent(AmazonTodayDealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
