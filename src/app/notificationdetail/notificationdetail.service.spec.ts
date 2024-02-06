import { TestBed } from '@angular/core/testing';

import { NotificationdetailService } from './notificationdetail.service';

describe('NotificationdetailService', () => {
  let service: NotificationdetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotificationdetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
