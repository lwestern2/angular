import { Component, OnInit, Input } from '@angular/core';
import { Doc } from '../docs.model';

@Component({
  selector: 'cms-docs-detail',
  templateUrl: './docs-detail.component.html',
  styleUrls: ['./docs-detail.component.css']
})
export class DocsDetailComponent implements OnInit {
  @Input() doc: Doc;

  constructor() { }

  ngOnInit() {
  }

}
