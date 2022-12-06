import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrepriseprofileComponent } from './entrepriseprofile.component';

describe('EntrepriseprofileComponent', () => {
  let component: EntrepriseprofileComponent;
  let fixture: ComponentFixture<EntrepriseprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntrepriseprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrepriseprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
