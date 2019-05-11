import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Contact } from '../contact.model';

@Component({
  selector: 'cms-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Output() contactWasSelected = new EventEmitter<Contact>();

  contacts: Contact[] = [
    new Contact(1,
    "Bro. Jackson",
    "jacksonk@byui.edu",
    208-496-3771,
    "https://web.byui.edu/Directory/Employee/jacksonk.jpg",
    null),
    new Contact(2,
    "Bro. Barzee",
    "barzeer@byui.edu",
    208-496-3768,
    "https://web.byui.edu/Directory/Employee/barzeer.jpg",
    null)
  ];

  constructor() { }

  ngOnInit() {
  }

  onContactSelected(contact: Contact){
    this.contactWasSelected.emit(contact);
  }

}
