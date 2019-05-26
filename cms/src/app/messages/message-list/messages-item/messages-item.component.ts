import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../../messages.model';
import { ContactService } from 'src/app/contacts/contact.service';
import { Contact } from 'src/app/contacts/contact.model';

@Component({
  selector: 'cms-messages-item',
  templateUrl: './messages-item.component.html',
  styleUrls: ['./messages-item.component.css']
})
export class MessagesItemComponent implements OnInit {
  @Input() message: Message;
  messageSender: string = "";
  canEdit: boolean = false;

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    let contact: Contact = this.contactService.getContact(this.message.sender);
    this.messageSender = contact.name;
  }

  

}
