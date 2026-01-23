import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskFormComponent } from './task-form';
import { FormsModule } from '@angular/forms';

describe('TaskFormComponent', () => {
  let component: TaskFormComponent;
  let fixture: ComponentFixture<TaskFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskFormComponent, FormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(TaskFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the task form component', () => {
    expect(component).toBeTruthy();
  });

  it('should clear input fields after adding task', () => {
    component.title = 'Test Task';
    component.description = 'Test Description';

    component.addTask();

    expect(component.title).toBe('');
    expect(component.description).toBe('');
  });
});
