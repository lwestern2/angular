import { Injectable, EventEmitter } from '@angular/core';
import { Doc } from './docs.model';
import { MOCKDOCUMENTS } from './MOCKDOCUMENTS';

@Injectable({
  providedIn: 'root'
})
export class DocService {
  docSelectedEvent = new EventEmitter<Doc>();
  docChangedEvent = new EventEmitter<Doc[]>();

  private docs: Doc[] = [];

  constructor() {
    this.docs = MOCKDOCUMENTS;
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

  deleteDoc(doc: Doc) {
    if (doc === null || doc === undefined) {
      return;
    }

    const pos = this.docs.indexOf(doc);
    if (pos < 0) {
      return;
    }

    this.docs.splice(pos, 1);
    this.docChangedEvent.emit(this.docs.slice());
  }
}
