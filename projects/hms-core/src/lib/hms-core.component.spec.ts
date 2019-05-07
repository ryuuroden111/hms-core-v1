import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HmsCoreComponent } from './hms-core.component';

describe('HmsCoreComponent', () => {
  let component: HmsCoreComponent;
  let fixture: ComponentFixture<HmsCoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HmsCoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HmsCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
