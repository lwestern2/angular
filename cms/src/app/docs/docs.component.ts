import { Component, OnInit } from '@angular/core';
import { Doc } from './docs.model';
import { DocService } from './docs.service';

@Component({
  selector: 'cms-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.css']
})
export class DocsComponent implements OnInit {
  selectedDoc: Doc;

  constructor(private docService: DocService) { }

  ngOnInit() {
    this.docService.docSelectedEvent.subscribe(
      (doc: Doc) => {
        this.selectedDoc = doc;
      }
    )
  }
}
