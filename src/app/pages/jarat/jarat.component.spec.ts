import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JaratComponent } from './jarat.component';

describe('JaratComponent', () => {
  let component: JaratComponent;
  let fixture: ComponentFixture<JaratComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JaratComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JaratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
