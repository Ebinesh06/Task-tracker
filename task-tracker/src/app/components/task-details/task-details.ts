import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-details.html',
  styleUrls: ['./task-details.css']
})

export class TaskDetailsComponent {

  /* Task received from parent (task-list) */
  @Input() task!: Task;

  /* Toggle completed / pending status */
  toggleStatus() {
    this.task.completed = !this.task.completed;

    // Update localStorage so change persists
    const tasks: Task[] = JSON.parse(localStorage.getItem('tasks') || '[]');

    const index = tasks.findIndex(t => t.id === this.task.id);
    if (index !== -1) {
      tasks[index] = this.task;
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }

  /* Go back to task list view */
  goBack() {
    // CIA-2 safe navigation:
    // simply hide details by reloading state
    window.history.back();
  }
}
