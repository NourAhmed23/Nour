import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustmdirctivsComponent } from './custmdirctivs.component';

describe('CustmdirctivsComponent', () => {
  let component: CustmdirctivsComponent;
  let fixture: ComponentFixture<CustmdirctivsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustmdirctivsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustmdirctivsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
