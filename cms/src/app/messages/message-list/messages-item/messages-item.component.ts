import { Component, OnInit, Input } from '@angular/core';
import { Messages } from '../../messages.model';

@Component({
  selector: 'cms-messages-item',
  templateUrl: './messages-item.component.html',
  styleUrls: ['./messages-item.component.css']
})
export class MessagesItemComponent implements OnInit {
  @Input() message: Messages;

  constructor() { }

  ngOnInit() {
  }

  

}
