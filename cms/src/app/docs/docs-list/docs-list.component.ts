import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Doc } from '../docs.model';
import { DocService } from '../docs.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'cms-docs-list',
  templateUrl: './docs-list.component.html',
  styleUrls: ['./docs-list.component.css']
})
export class DocsListComponent implements OnInit {
  docs: Doc[] = [];
  sub: Subscription;

  constructor(private docService: DocService) {
    this.docs = this.docService.getDocs();
   }

  ngOnInit() {
    this.sub = this.docService.docChangedEvent.subscribe(
      (docList: Doc[]) => {
        this.docs = docList;
      }
    );
  }

}
