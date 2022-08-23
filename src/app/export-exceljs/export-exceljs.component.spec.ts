import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportExceljsComponent } from './export-exceljs.component';

describe('ExportExceljsComponent', () => {
  let component: ExportExceljsComponent;
  let fixture: ComponentFixture<ExportExceljsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExportExceljsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExportExceljsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
