import { Injectable, EventEmitter } from '@angular/core';
import { Doc } from './docs.model';
import { MOCKDOCUMENTS } from './MOCKDOCUMENTS';
import {Subject } from 'rxjs';
import { DocsComponent } from './docs.component';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DocService {
  docSelectedEvent = new EventEmitter<Doc>();
  docChangedEvent = new EventEmitter<Doc[]>();
  docListChangedEvent = new Subject<Doc[]>();

  docs: Doc[] = [];
  maxDocId: number;

  constructor(private http: HttpClient) {
    // this.docs = MOCKDOCUMENTS;
    this.maxDocId = this.getMaxId();
   }

   storeDocs(docs: Doc[]) {
     this.docs = JSON.parse(JSON.stringify(this.docs));
     const header = new HttpHeaders ({'Content-Type': 'application/json'});

     this.http.put('https://lw-cms.firebaseio.com/documents.json', this.docs, {headers: header})
     .subscribe((response: Response) => {
       this.docListChangedEvent.next(this.docs.slice());
     });
   }

   getDocs(): Doc[] {
    this.http.get<Doc[]>('https://lw-cms.firebaseio.com/documents.json')
    .subscribe((docs: Doc[]) => {
      this.docs = docs;
      this.maxDocId = this.getMaxId();
      this.docs.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
      this.docListChangedEvent.next(this.docs.slice());
    });

    (error: any) => {
      console.log(error);
    }
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
    // this.docListChangedEvent.next(this.docs.slice());
    this.storeDocs(this.docs);
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
    // this.docListChangedEvent.next(this.docs.slice());
    this.storeDocs(this.docs);
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
    // this.docListChangedEvent.next(this.docs.slice());
    this.storeDocs(this.docs);
  }
}
