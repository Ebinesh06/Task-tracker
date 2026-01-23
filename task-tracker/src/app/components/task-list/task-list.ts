import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Task } from '../../models/task.model';
import { TaskFormComponent } from '../task-form/task-form';
import { TaskDetailsComponent } from '../task-details/task-details';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, TaskFormComponent, TaskDetailsComponent],
  templateUrl: './task-list.html',
  styleUrls: ['./task-list.css']
})
export class TaskListComponent implements OnInit {

  tasks: Task[] = [];
  filter: 'all' | 'pending' | 'completed' = 'all';
  selectedTask: Task | null = null;

  ngOnInit(): void {
    this.loadTasks();
  }

  /* ---------- STORAGE ---------- */
  loadTasks() {
    const saved = localStorage.getItem('tasks');
    this.tasks = saved ? JSON.parse(saved) : [];
  }

  saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  /* ---------- ADD TASK ---------- */
  onTaskAdded(task: Task) {
    this.tasks.push(task);
    this.saveTasks();
  }

  /* ---------- FILTER ---------- */
  setFilter(type: 'all' | 'pending' | 'completed') {
    this.filter = type;
    this.selectedTask = null;
  }

  get filteredTasks(): Task[] {
    if (this.filter === 'pending') {
      return this.tasks.filter(t => !t.completed);
    }
    if (this.filter === 'completed') {
      return this.tasks.filter(t => t.completed);
    }
    return this.tasks;
  }

  /* ---------- COUNTS ---------- */
  get totalCount(): number {
    return this.tasks.length;
  }

  get completedCount(): number {
    return this.tasks.filter(t => t.completed).length;
  }

  get pendingCount(): number {
    return this.tasks.filter(t => !t.completed).length;
  }

  /* ---------- TASK ACTIONS ---------- */
  toggleTask(task: Task) {
    task.completed = !task.completed;
    this.saveTasks();
  }

  viewDetails(task: Task) {
    this.selectedTask = task;
  }
  clearCompleted() {
  this.tasks = this.tasks.filter(task => !task.completed);
  this.saveTasks();
  this.selectedTask = null;
}
}
