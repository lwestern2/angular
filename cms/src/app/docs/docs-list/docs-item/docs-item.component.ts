import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Doc } from '../../docs.model';

@Component({
  selector: 'cms-docs-item',
  templateUrl: './docs-item.component.html',
  styleUrls: ['./docs-item.component.css']
})
export class DocsItemComponent implements OnInit {
  @Input() doc: Doc;

  constructor() { }

  ngOnInit() {
  }

}
