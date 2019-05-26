import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Message } from '../messages.model';
import { MessageService } from '../message.service';

@Component({
  selector: 'cms-message-edit',
  templateUrl: './message-edit.component.html',
  styleUrls: ['./message-edit.component.css']
})
export class MessageEditComponent implements OnInit {
  public currentSender: string = '1';
  @ViewChild('subjectInput') subjectInputRef: ElementRef;
  @ViewChild('msgInput') msgInputRef: ElementRef;

  constructor(private messageService: MessageService) { }

  ngOnInit() {
  }

  onSendMsg() {
    const msgSubject = this.subjectInputRef.nativeElement.value;
    const msg = this.msgInputRef.nativeElement.value;
    const newMessage = new Message('1', msgSubject, msg, this.currentSender);
    this.messageService.addMessage(newMessage);
    
    this.onClear();
  }

  onClear() {
    this.subjectInputRef.nativeElement.value = '';
    this.msgInputRef.nativeElement.value = '';
  }
}
