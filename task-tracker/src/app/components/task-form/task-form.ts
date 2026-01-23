import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-form.html',
  styleUrls: ['./task-form.css']
})
export class TaskFormComponent {

  title = '';
  description = '';

  @Output() taskAdded = new EventEmitter<Task>();

  addTask() {
    if (!this.title.trim()) return;

    this.taskAdded.emit({
      id: Date.now(),
      title: this.title,
      description: this.description,
      completed: false
    });

    this.title = '';
    this.description = '';
  }
}
