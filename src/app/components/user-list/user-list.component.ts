import { UserService } from '../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[] = []

  constructor(private userService: UserService) {

    // let userService = new UsersService()
    //this.users = userService.getUsers()

  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      gottedUsers => this.users = gottedUsers
    )
  }


}
