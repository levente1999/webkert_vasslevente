import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MegallohelyComponent } from './megallohely.component';

describe('MegallohelyComponent', () => {
  let component: MegallohelyComponent;
  let fixture: ComponentFixture<MegallohelyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MegallohelyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MegallohelyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
