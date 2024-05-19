import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JaratmegalloComponent } from './jaratmegallo.component';

describe('JaratmegalloComponent', () => {
  let component: JaratmegalloComponent;
  let fixture: ComponentFixture<JaratmegalloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JaratmegalloComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JaratmegalloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
