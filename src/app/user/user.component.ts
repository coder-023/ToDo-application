import { Component, EventEmitter, Input, Output } from "@angular/core";
import { User } from "./user.model";

@Component({
    templateUrl: './user.component.html',
    styleUrl: './user.component.css',
    selector: 'app-user',
})
export class UserComponent {

    @Input({ required: true }) selected!: boolean;
    @Input({ required: true }) user!: User;
    @Output() select = new EventEmitter<string>();
    //select = output<string>(); //signal based implementation
    // imgPath = computed(() => 'assets/users/' + this.avatar()) //signal based code
    onUserClick() {
        this.select.emit(this.user?.id);
    }
    get imgPath() {
        return 'assets/users/' + this.user?.avatar;
    }


}
