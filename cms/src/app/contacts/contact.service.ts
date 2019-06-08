import {Injectable, EventEmitter} from '@angular/core';
import {Contact} from './contact.model';
import { MOCKCONTACTS} from "./MOCKCONTACTS";
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  contactSelectedEvent = new EventEmitter<Contact>();
  contactChangedEvent = new EventEmitter<Contact[]>();
  contactListChangedEvent = new Subject<Contact[]>();

  private contacts: Contact[] = [];
  maxContactId: number;

  constructor() {
    this.contacts = MOCKCONTACTS;
    this.maxContactId = this.getMaxId();
  }

  getContacts(): Contact[] {
    return this.contacts.slice();
  }

  getContact(id: string): Contact {
    for (let contact of this.contacts) {
      if (contact.id === id) {
        return contact
      }
    }
    return null;
  }

  getMaxId(): number {
    let maxId = 0;
    for(const contact of this.contacts) {
      const currentId = +contact.id;
      if (currentId > maxId) {
        maxId = currentId;
      }
    }
    return maxId;
  }

  addContact(newContact: Contact) {
    if (!newContact) {
      return;
    }

    this.maxContactId++;
    newContact.id = String(this.maxContactId);
    this.contacts.push(newContact);
    this.contactListChangedEvent.next(this.contacts.slice());
  }

  updateContact(originalContact: Contact, updateContact: Contact) {
    if (originalContact === null || updateContact === null || originalContact === undefined || updateContact === undefined) {
      return;
    }

    const pos = this.contacts.indexOf(originalContact);
    if (pos < 0) {
      return;
    }

    updateContact.id = originalContact.id;
    this.contacts[pos] = updateContact;
    this.contactListChangedEvent.next(this.contacts.slice());
  }

  deleteContact(contact: Contact) {
    if (contact === null || contact === undefined) {
      return;
    }

    const pos = this.contacts.indexOf(contact);
    if (pos < 0) {
      return;
    }

    this.contacts.splice(pos, 1);
    this.contactListChangedEvent.next(this.contacts.slice());
  }
}
