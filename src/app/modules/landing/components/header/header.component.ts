import { ModalComponent } from './../modal/modal.component';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  @ViewChild('modalComponent')
  private modalRef: ModalComponent;

  constructor() {}

  ngOnInit(): void {}

  public openModal(): void {
    this.modalRef.showModalDialog();
  }
}
