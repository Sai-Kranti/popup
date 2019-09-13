import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RiseComponent } from './rise/rise.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {

  constructor(private modal: NgbModal) {}

  onClick() {
    this.modal.open(RiseComponent);
  }

  title = 'popup';
}
