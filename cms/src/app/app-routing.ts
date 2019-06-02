import { Routes, RouterModule } from "@angular/router";
import { DocsComponent } from './docs/docs.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NgModule } from '@angular/core';
import { MessageListComponent } from './messages/message-list/message-list.component';
import { DocEditComponent } from './docs/doc-edit/doc-edit.component';
import { DocsDetailComponent } from './docs/docs-detail/docs-detail.component';
import { EditComponent } from './contacts/edit/edit.component';
import { DetailComponent } from './contacts/detail/detail.component';

const app_Routes: Routes = [
    { path: '', redirectTo: '/docs', pathMatch: 'full' },
    { path: 'docs', component: DocsComponent, children: [
        { path: 'new', component: DocEditComponent },
        { path: ':id', component: DocsDetailComponent },
        { path: ':id/edit', component: DocEditComponent }
    ] },
    { path: 'messages', component: MessageListComponent },
    { path: 'contact', component: ContactsComponent, children: [
        { path: 'new', component: EditComponent },
        { path: ':id', component: DetailComponent },
        { path: ':id/edit', component: EditComponent }
    ] }
];

@NgModule({
    imports: [RouterModule.forRoot(app_Routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}