import {Component, EventEmitter, Input,Output} from "@angular/core";
import { User } from "./user.model";
import { CardComponent } from "../shared/card/card.component";

@Component({
    standalone:true,
    templateUrl:'./user.component.html',
    styleUrl:'./user.component.css',
    selector:'app-user',
    imports: [CardComponent]

    
})
export class UserComponent{
    
    @Input({required:true}) selected!:boolean;
     @Input({required:true}) user!:User;
     @Output() select = new EventEmitter<string>();
    //select = output<string>(); //signal based implementation
    // imgPath = computed(() => 'assets/users/' + this.avatar()) //signal based code
    onUserClick(){
       this.select.emit(this.user?.id);
    }
   get imgPath(){
        return 'assets/users/' + this.user?.avatar;
    }
    
    
}
