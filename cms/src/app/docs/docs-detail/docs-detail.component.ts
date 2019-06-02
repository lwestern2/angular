import { Component, OnInit } from '@angular/core';
import { Doc } from '../docs.model';
import { DocService } from '../docs.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { WindRefService } from 'src/app/wind-ref.service';

@Component({
  selector: 'cms-docs-detail',
  templateUrl: './docs-detail.component.html',
  styleUrls: ['./docs-detail.component.css']
})
export class DocsDetailComponent implements OnInit {
  doc: Doc;
  id: string;
  nativeWindow: any;

  constructor(private docService: DocService,
    private route: ActivatedRoute,
    private router: Router,
    private windowRefService: WindRefService) {
      this.nativeWindow = windowRefService.getNativeWindow();
     }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
        this.doc = this.docService.getDoc(this.id);
      }
    );
  }

  onView() {
    if (this.doc.url) {
      this.nativeWindow.open(this.doc.url);
    }
  }

  onDelete() {
    this.docService.deleteDoc(this.doc);
    this.router.navigate(['/docs'], { relativeTo: this.route});
  }
}
