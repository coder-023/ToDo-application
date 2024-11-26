import { Component, EventEmitter,Output,inject,Input } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({required:true}) userId!:string;
  @Output() closeTask = new EventEmitter<void>; 
 
  enteredTitle = '';
  enteredSummary = '';
  enteredDueDate = '';
  private taskService = inject(TasksService);
closeDialog(){
this.closeTask.emit();
}
submitNewTask(){
  this.taskService.addTask({
    title:this.enteredTitle,
    summary:this.enteredSummary,
    date:this.enteredDueDate,
    
  },this.userId)

this.closeDialog();
}
}
