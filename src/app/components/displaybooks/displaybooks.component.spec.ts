import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaybooksComponent } from './displaybooks.component';

describe('DisplaybooksComponent', () => {
  let component: DisplaybooksComponent;
  let fixture: ComponentFixture<DisplaybooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplaybooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaybooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
