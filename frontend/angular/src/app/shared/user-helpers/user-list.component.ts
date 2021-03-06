import { Component,OnInit, Input } from '@angular/core';
import { UserList, UserService, NotificationService } from '../../core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
    selector: 'app-users-list',
    styleUrls: ['user-list.component.css'],
    templateUrl: './user-list.component.html'
})

export class UserListComponent{
    // isDeleting = false;
    allUsers: any;
    
    constructor (
        private usersService: UserService,
        private router: Router,
        private notification: NotificationService,

    ) {}

    @Input()
    set config(config: String) {
        if (config=="all") {
          this.runQuery();
        }
    }
    runQuery(){
        this.notification.showWarning("Todos los cambios realizados aqui podrian afectar a la app","Cuidado")

        this.allUsers = [];
        this.usersService.GetAllUsers().subscribe((users) => {
            console.log(users);
            this.allUsers = users;
        });
    }
    refresh(){
        this.runQuery()
        // Updated timezone will be available here as timezone.
    }

    func(){
        console.log("DENTRO DEL LIST COMPONENT F");
    }

    // //delete award
    // deleteAward(id) {
    //     this.isDeleting = true;
    //     this.awardsService.destroy(id).subscribe(success => {
    //           this.runQuery()
    //         }
    //       );
    //   }
}