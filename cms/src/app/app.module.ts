import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { ContactsComponent } from './contacts/contacts.component';
import { DetailComponent } from './contacts/detail/detail.component';
import { ListComponent } from './contacts/list/list.component';
import { ItemComponent } from './contacts/list/item/item.component';
import { DocsComponent } from './docs/docs.component';
import { DocsListComponent } from './docs/docs-list/docs-list.component';
import { DocsDetailComponent } from './docs/docs-detail/docs-detail.component';
import { DocsItemComponent } from './docs/docs-list/docs-item/docs-item.component';
import { MessagesComponent } from './messages/messages.component';
import { MessagesItemComponent } from './messages/message-list/messages-item/messages-item.component';
import { MessageEditComponent } from './messages/message-edit/message-edit.component';
import { MessageListComponent } from './messages/message-list/message-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactsComponent,
    DetailComponent,
    ListComponent,
    ItemComponent,
    DocsComponent,
    DocsListComponent,
    DocsDetailComponent,
    DocsItemComponent,
    MessagesComponent,
    MessagesItemComponent,
    MessageEditComponent,
    MessageListComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
