import {Component,Input,Output,EventEmitter, Inject} from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { TasksService } from './tasks.service';
import { NewTaskComponent } from "./new-task/new-task.component";
import { NewTaskData } from './newTaskdata.model';
@Component({
    standalone:true,
    templateUrl:'./tasks.component.html',
    styleUrl: './tasks.component.css',
    selector:'app-tasks',
    imports: [TaskComponent, NewTaskComponent]
})
export class TasksComponent{
    @Input({required:true}) id!:string;
    @Input({required:true}) name!:string;
    isClicked:boolean = false;
    
   constructor(private tasksService:TasksService){}
   addTask(newTask:NewTaskData){
    this.tasksService.addTask(newTask,this.id)
   }
   selectedUserTasks(){
    return this.tasksService.getUserTasks(this.id);
   }
    addNewTask(){
    this.isClicked=true;
    }
    closeDialog(){
      this.isClicked=false;
    }
    deleteTask(taskId:string){
      this.tasksService.deleteTask(taskId);
    }
    getUserId(){
      return this.id;

    }
    
    
}