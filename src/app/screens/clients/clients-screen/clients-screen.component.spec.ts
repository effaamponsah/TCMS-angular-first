import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsScreenComponent } from './clients-screen.component';

describe('ClientsScreenComponent', () => {
  let component: ClientsScreenComponent;
  let fixture: ComponentFixture<ClientsScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientsScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientsScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
