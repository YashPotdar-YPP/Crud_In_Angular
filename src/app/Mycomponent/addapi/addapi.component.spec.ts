import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddapiComponent } from './addapi.component';

describe('AddapiComponent', () => {
  let component: AddapiComponent;
  let fixture: ComponentFixture<AddapiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddapiComponent]
    });
    fixture = TestBed.createComponent(AddapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
