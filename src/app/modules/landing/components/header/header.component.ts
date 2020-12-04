import { ModalComponent } from '@modules/landing/components/modal/modal.component';
import { Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  @Input() modalComponent: ModalComponent;

  constructor() {}

  ngOnInit(): void {}

  public openModal(): void {
    this.modalComponent.showModalDialog();
  }
}
