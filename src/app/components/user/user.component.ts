import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() user: User;


  constructor() { }

  ngOnInit(): void {
  }


  getCompany(user: User): string {
    if (user != null && user != undefined)
      return user.company.name + ' , ' + user.company.catchPhrase
    return ""
  }


  getAddress(user: User): string {
    if (user != null && user != undefined)
      return user.address.suit + ' , ' + user.address.street + ' , ' + user.address.city + ' , ' + user.address.zipCode
    return ""
  }

}
