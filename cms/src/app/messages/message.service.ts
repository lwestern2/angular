import { Injectable, EventEmitter } from '@angular/core';
import { Message } from './messages.model';
import { MOCKMESSAGES } from './MOCKMESSAGES';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messageChangeEvent = new EventEmitter<Message[]>();

  messages: Message[] = [];
  maxMessageId: number;

  constructor(private http: HttpClient) {
    // this.messages = MOCKMESSAGES;
    this.maxMessageId = this.getMaxId();
    this.getMessages();
   }

   storeMessages(messages: Message[]) {
     this.messages = JSON.parse(JSON.stringify(this.messages));
     const header = new HttpHeaders({ 'Content-Type': 'application/json' });

     this.http.put('https://lw-cms.firebaseio.com/messages.json', this.messages, {headers: header})
     .subscribe((response: Response) => {
       this.messageChangeEvent.next(this.messages.slice());
     });
   }

   getMessages(): Message[] {
     this.http.get('https://lw-cms.firebaseio.com/messages.json')
     .subscribe((messages: Message[]) => {
       this.messages = messages;
       this.maxMessageId = this.getMaxId();
       this.messageChangeEvent.next(this.messages.slice());
     });
     (error: any) => {
       console.log(error);
     }
     return this.messages.slice();
  }

  getMessage(id: string): Message {
    for (let message of this.messages) {
      if (message.id === id) {
        return message
      }
    }
    return null;
  }

  addMessage(message: Message) {
    this.messages.push(message);
    // this.messageChangeEvent.emit(this.messages.slice());
    this.storeMessages(this.messages);    
  }

  getMaxId(): number {
    let maxId = 0;
    for (let message of this.messages) {
      const currentId = +message.id;
      if (currentId > maxId) {
        maxId = currentId;
      }
    }
    return maxId;
  }
}
