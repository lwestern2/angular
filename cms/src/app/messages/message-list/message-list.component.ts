import { Component, OnInit } from '@angular/core';
import { Message } from '../messages.model';

@Component({
  selector: 'cms-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {
  messages: Message[] = [
    new Message(1, 'Test', 'This is a test message', 'Bro. Thanye'),
    new Message(2, 'Something', 'The grades for this assignemnt have been posted', 'Bro. Jackson'),
    new Message(3, 'Grades', 'When is assignment 3 due?', 'Leah')
  ]

  constructor() { }

  ngOnInit() {
  }

  onAddMsg (message: Message) {
    this.messages.push(message);
  }

}
