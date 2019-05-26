import { Component, OnInit } from '@angular/core';
import { Message } from '../messages.model';
import { MessageService } from '../message.service';

@Component({
  selector: 'cms-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {
  messages: Message[] = [];

  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.messages = this.messageService.getMessages();
    this.messageService.messageChangeEvent.subscribe(
      (messages: Message[]) => {
        this.messages = messages;
      }
    )
  }

  onAddMsg (message: Message) {
    this.messages.push(message);
  }

}
