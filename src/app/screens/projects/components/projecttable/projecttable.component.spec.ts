import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjecttableComponent } from './projecttable.component';

describe('ProjecttableComponent', () => {
  let component: ProjecttableComponent;
  let fixture: ComponentFixture<ProjecttableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjecttableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjecttableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
