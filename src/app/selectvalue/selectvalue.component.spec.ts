import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectvalueComponent } from './selectvalue.component';

describe('SelectvalueComponent', () => {
  let component: SelectvalueComponent;
  let fixture: ComponentFixture<SelectvalueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectvalueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectvalueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
