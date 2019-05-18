import { Component, OnInit } from '@angular/core';
import { Doc } from './docs.model';

@Component({
  selector: 'cms-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.css']
})
export class DocsComponent implements OnInit {
  selectedDoc: Doc;

  constructor() { }

  ngOnInit() {
  }

}
