import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-user-single',
  templateUrl: './user-single.component.html',
  styleUrls: ['./user-single.component.scss']
})
export class UserSingleComponent implements OnInit {
  
  @Input() user: any = {};
  @Output() delete: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  emitDelete(): void {
    this.delete.emit(this.user.id);
  }
}
