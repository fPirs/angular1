import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-user-single',
  templateUrl: './user-single.component.html',
  styleUrls: ['./user-single.component.scss']
})
export class UserSingleComponent implements OnInit {
  
  @Input() user: any = {};

  constructor() { }

  ngOnInit(): void {
  }

}
