import { Component, OnInit } from '@angular/core';
import { Doc } from '../docs.model';
import { DocService } from '../docs.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'cms-doc-edit',
  templateUrl: './doc-edit.component.html',
  styleUrls: ['./doc-edit.component.css']
})
export class DocEditComponent implements OnInit {
  originalDoc: Doc;
  document: Doc;
  editMode: boolean = false;

  constructor(private docService: DocService,
      private router: Router,
      private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        const id = params.id;
        if (id == undefined || id == null) {
          this.editMode = false;
          return;
        }
        this.originalDoc = this.docService.getDoc(id);
        if (this.originalDoc == undefined || this.originalDoc == null) {
          return;
        }
        this.editMode = true;
        this.document = JSON.parse(JSON.stringify(this.originalDoc));
      }
    );
  }

  onSubmit(form: NgForm) {
    let values = form.value;
    let newDoc = new Doc('', values.name, values.description, values.documentUrl, null);

    if(this.editMode === true) {
      this.docService.updateDoc(this.originalDoc, newDoc);
    } else {
      this.docService.addDoc(newDoc);
    }

    this.router.navigate(['/docs']);
    console.log(form.value);
  }

  onCancel() {
    this.router.navigate(['/docs']);
  }

}
