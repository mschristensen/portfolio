/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StraplineComponent } from './strapline.component';

describe('StraplineComponent', () => {
  let component: StraplineComponent;
  let fixture: ComponentFixture<StraplineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StraplineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StraplineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
