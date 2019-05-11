import { Component, OnInit } from '@angular/core';
import { Messages } from '../messages.model';

@Component({
  selector: 'cms-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {
  message: Messages[] = [
    new Messages(1, 'Test', 'This is a test message', 'Bro. Thanye'),
    new Messages(2, 'Something', 'The grades for this assignemnt have been posted', 'Bro. Jackson'),
    new Messages(3, 'Grades', 'When is assignment 3 due?', 'Leah')
  ]

  constructor() { }

  ngOnInit() {
  }

  onAddMsg (message: Messages) {
    this.message.push(message);
  }

}
