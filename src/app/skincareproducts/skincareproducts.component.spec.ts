import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkincareproductsComponent } from './skincareproducts.component';

describe('SkincareproductsComponent', () => {
  let component: SkincareproductsComponent;
  let fixture: ComponentFixture<SkincareproductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkincareproductsComponent]
    });
    fixture = TestBed.createComponent(SkincareproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
