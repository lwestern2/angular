import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Messages } from '../messages.model';

@Component({
  selector: 'cms-message-edit',
  templateUrl: './message-edit.component.html',
  styleUrls: ['./message-edit.component.css']
})
export class MessageEditComponent implements OnInit {
  currentSender: string = 'Leah';
  @ViewChild('subjectInput') subjectInputRef: ElementRef;
  @ViewChild('msgInput') msgInputRef: ElementRef;
  @Output() msgAdded = new EventEmitter<Messages>();

  constructor() { }

  ngOnInit() {
  }

  onSendMsg(currentSender) {
    const msgSubject = this.subjectInputRef.nativeElement.value;
    const msg = this.msgInputRef.nativeElement.value;

    const newMessage = new Messages(2, msgSubject, msg, currentSender);
    this.msgAdded.emit(newMessage);
  }

  onClear() {
    this.subjectInputRef.nativeElement.value = '';
    this.msgInputRef.nativeElement.value = '';
  }
}
