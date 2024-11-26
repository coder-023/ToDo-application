import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './user/dummy-users';
import { CommonModule } from '@angular/common';
import { TasksComponent } from "./tasks/tasks.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, UserComponent, CommonModule, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  
  users = DUMMY_USERS;
  selectedUserId = '';
   
  onSelectUser(id:string){
    
   
    this.selectedUserId = id;
    // selectedName = this.users.find((u)=>u.id === id)?.name;
    // console.log(selectedName)
  }
  get selectedUser(){
    return this.users.find((u)=>u.id === this.selectedUserId)!;
  }
}
