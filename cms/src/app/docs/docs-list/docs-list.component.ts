import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Doc } from '../docs.model';

@Component({
  selector: 'cms-docs-list',
  templateUrl: './docs-list.component.html',
  styleUrls: ['./docs-list.component.css']
})
export class DocsListComponent implements OnInit {
  @Output() selectedDocEvent = new EventEmitter<Doc>();

  docs: Doc[] = [];

  constructor() { }

  ngOnInit() {
    this.docs = [
    new Doc(1, 'CIT 260 - O.O Programming', 'Some class description', 'https://content.byui.edu/file/22c0260d-e1b7-43a2-8903-8d8f948041ee/4/syllabus.html', 'none'),
    new Doc(2, 'CIT 366 - Full Stack Development', 'Some class description', 'https://content.byui.edu/file/22c0260d-e1b7-43a2-8903-8d8f948041ee/4/syllabus.html', 'none'),
    new Doc(3, 'CIT 425 - Data Warehousing', 'Some class description', 'https://content.byui.edu/file/22c0260d-e1b7-43a2-8903-8d8f948041ee/4/syllabus.html', 'none'),
    new Doc(1, 'CIT 460 - Enterprise Development', 'Some class description', 'https://content.byui.edu/file/22c0260d-e1b7-43a2-8903-8d8f948041ee/4/syllabus.html', 'none'),
    new Doc(1, 'CIT 495 - Capstone', 'Some class description', 'https://content.byui.edu/file/22c0260d-e1b7-43a2-8903-8d8f948041ee/4/syllabus.html', 'none')
  ];
  }

  onSelectedDoc(docs: Doc) {
    this.selectedDocEvent.emit(docs);
  }


}
