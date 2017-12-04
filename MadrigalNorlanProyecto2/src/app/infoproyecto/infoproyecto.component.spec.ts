import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoproyectoComponent } from './infoproyecto.component';

describe('InfoproyectoComponent', () => {
  let component: InfoproyectoComponent;
  let fixture: ComponentFixture<InfoproyectoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoproyectoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoproyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
