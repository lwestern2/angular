import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Doc } from '../docs.model';
import { DocService } from '../docs.service';

@Component({
  selector: 'cms-docs-list',
  templateUrl: './docs-list.component.html',
  styleUrls: ['./docs-list.component.css']
})
export class DocsListComponent implements OnInit {
  docs: Doc[] = [];

  constructor(private docService: DocService) { }

  ngOnInit() {
    this.docs = this.docService.getDocs();
  }

  onSelectedDoc(docs: Doc) {
    this.docService.docSelectedEvent.emit(docs);
  }


}
