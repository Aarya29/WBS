import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkProjectDetailsComponent } from './work-project-details.component';

describe('WorkProjectDetailsComponent', () => {
  let component: WorkProjectDetailsComponent;
  let fixture: ComponentFixture<WorkProjectDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkProjectDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkProjectDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
