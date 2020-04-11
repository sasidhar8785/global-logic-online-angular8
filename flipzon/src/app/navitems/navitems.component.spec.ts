import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavitemsComponent } from './navitems.component';

describe('NavitemsComponent', () => {
  let component: NavitemsComponent;
  let fixture: ComponentFixture<NavitemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavitemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
