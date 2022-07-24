import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultInfoComponent } from './result-info.component';

describe('ResultInfoComponent', () => {
  let component: ResultInfoComponent;
  let fixture: ComponentFixture<ResultInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
