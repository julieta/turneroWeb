import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddturComponent } from './addtur.component';

describe('AddturComponent', () => {
  let component: AddturComponent;
  let fixture: ComponentFixture<AddturComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddturComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddturComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
