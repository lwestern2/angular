import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]', css attibute
  // selector: '.app-servers', css class
  selector: 'app-servers', //element
  // template: `
  //   <button class="btn btn-primary">Add Server</button>
  //   <app-server></app-server>
  //   <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false; //property binding
  serverCreationStatus = 'No server was created.'; //event binding
  serverName = 'Testserver'; //event binding
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2']; //directives

  constructor() { //property binding
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
    }
  

  ngOnInit() {
  }

onCreateServer() { //event binding
  this.serverCreated = true;
  this.servers.push(this.serverName); //directives
  this.serverCreationStatus = 'Server was created. Server name is' + this.serverName;
}

onUpdateServerName(event: any) { //event binding
  this.serverName = (<HTMLInputElement>event.target).value;
}
}
