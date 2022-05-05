import { Component, Input, OnInit } from '@angular/core';
import { Obj } from '../../model/entities'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

 @Input()  users: Obj[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
