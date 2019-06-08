import { Injectable, EventEmitter } from '@angular/core';
import { Doc } from './docs.model';
import { MOCKDOCUMENTS } from './MOCKDOCUMENTS';
import {Subject } from 'rxjs';
import { DocsComponent } from './docs.component';

@Injectable({
  providedIn: 'root'
})
export class DocService {
  docSelectedEvent = new EventEmitter<Doc>();
  docChangedEvent = new EventEmitter<Doc[]>();
  docListChangedEvent = new Subject<Doc[]>();

  private docs: Doc[] = [];
  maxDocId: number;

  constructor() {
    this.docs = MOCKDOCUMENTS;
    this.maxDocId = this.getMaxId();
   }

   getDocs(): Doc[] {
    return this.docs.slice();
  }

  getDoc(id: string): Doc {
    for (let doc of this.docs) {
      if (doc.id === id) {
        return doc
      }
    }
    return null;
  }

  getMaxId(): number {
    let maxId = 0;
    for(const doc of this.docs) {
      const currentId = +doc.id;
      if (currentId > maxId) {
        maxId = currentId;
      }
    }
    return maxId;
  }

  addDoc(newDoc: Doc) {
    if (!newDoc) {
      return;
    }

    this.maxDocId++;
    newDoc.id = String(this.maxDocId);
    this.docs.push(newDoc);
    this.docListChangedEvent.next(this.docs.slice());
  }

  updateDoc(originalDoc: Doc, updateDoc: Doc) {
    if (originalDoc === null || updateDoc === null || originalDoc === undefined || updateDoc === undefined) {
      return;
    }

    const pos = this.docs.indexOf(originalDoc);
    if (pos < 0) {
      return;
    }

    updateDoc.id = originalDoc.id;
    this.docs[pos] = updateDoc;
    this.docListChangedEvent.next(this.docs.slice());
  }

  deleteDoc(doc: Doc) {
    if (doc === null || doc === undefined) {
      return;
    }

    const pos = this.docs.indexOf(doc);
    if (pos < 0) {
      return;
    }

    this.docs.splice(pos, 1);
    this.docListChangedEvent.next(this.docs.slice());
  }
}
