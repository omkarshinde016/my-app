import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
   serverCreationStatus = 'Server is not created';
   inputData = ' ';
   username;
  constructor() { }

  ngOnInit() {
  }

  onServerCreation() {
    this.serverCreationStatus = 'Server is created';
  }
  // inputFromServer(event: Event) {
  //         this.inputData = (HTMLInputElement as (event.target)).value;
  // }

  assignmentInput(event: Event) {
        this.username = (<HTMLInputElement>event.target).value;
  }

  setUsername() {
      this.username = ' ';
  }
}
