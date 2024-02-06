import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationdetailComponent } from './notificationdetail.component';

describe('NotificationdetailComponent', () => {
  let component: NotificationdetailComponent;
  let fixture: ComponentFixture<NotificationdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificationdetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificationdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
