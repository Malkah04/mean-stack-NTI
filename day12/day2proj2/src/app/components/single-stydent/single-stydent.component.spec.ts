import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleStydentComponent } from './single-stydent.component';

describe('SingleStydentComponent', () => {
  let component: SingleStydentComponent;
  let fixture: ComponentFixture<SingleStydentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleStydentComponent]
    });
    fixture = TestBed.createComponent(SingleStydentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
