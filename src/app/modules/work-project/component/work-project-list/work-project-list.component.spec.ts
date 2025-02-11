import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkProjectListComponent } from './work-project-list.component';

describe('WorkProjectListComponent', () => {
  let component: WorkProjectListComponent;
  let fixture: ComponentFixture<WorkProjectListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkProjectListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkProjectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
