import { Component, OnInit, OnDestroy } from '@angular/core';
import { Contact } from '../contact.model';
import { ContactService } from '../contact.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'cms-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {
  contacts: Contact[] = [];
  sub: Subscription;

  constructor(private contactService: ContactService) {
    this.contacts = this.contactService.getContacts();
   }

  ngOnInit() {
    this.sub = this.contactService.contactListChangedEvent.subscribe(
      (contactList: Contact[]) => {
        this.contacts = contactList;
      }
    );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }  

}
