import { Component, Input } from '@angular/core';
import { TasksService } from './tasks.service';
import { NewTaskData } from './newTaskdata.model';
@Component({
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  selector: 'app-tasks',

})
export class TasksComponent {
  @Input({ required: true }) id!: string;
  @Input({ required: true }) name!: string;
  isClicked: boolean = false;

  constructor(private tasksService: TasksService) { }
  addTask(newTask: NewTaskData) {
    this.tasksService.addTask(newTask, this.id)
  }
  selectedUserTasks() {
    return this.tasksService.getUserTasks(this.id);
  }
  addNewTask() {
    this.isClicked = true;
  }
  closeDialog() {
    this.isClicked = false;
  }
  deleteTask(taskId: string) {
    this.tasksService.deleteTask(taskId);
  }
  getUserId() {
    return this.id;

  }


}