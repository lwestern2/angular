import { Injectable, EventEmitter } from '@angular/core';
import { Doc } from './docs.model';
import { MOCKDOCUMENTS } from './MOCKDOCUMENTS';

@Injectable({
  providedIn: 'root'
})
export class DocService {
  docSelectedEvent = new EventEmitter<Doc>();

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
}
