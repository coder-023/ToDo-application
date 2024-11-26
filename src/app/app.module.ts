import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { TasksComponent } from "./tasks/tasks.component";
import { BrowserModule } from "@angular/platform-browser";
import { TaskComponent } from "./tasks/task/task.component";
import { CardComponent } from "./shared/card/card.component";
import { NewTaskComponent } from "./tasks/new-task/new-task.component";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [AppComponent, HeaderComponent, UserComponent,
        CardComponent, TasksComponent, TaskComponent, NewTaskComponent],
        imports: [BrowserModule, FormsModule],
        providers:[],
        bootstrap: [AppComponent],    //root component declaration
})
export class AppModule { }