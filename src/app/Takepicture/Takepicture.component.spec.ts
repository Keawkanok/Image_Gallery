/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TakepictureComponent } from './Takepicture.component';

describe('TakepictureComponent', () => {
  let component: TakepictureComponent;
  let fixture: ComponentFixture<TakepictureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TakepictureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TakepictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
