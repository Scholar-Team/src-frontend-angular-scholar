import { ModalComponent } from '@modules/landing/components/modal/modal.component';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {

  @Input() modalComponent: ModalComponent;

  constructor() { }

  ngOnInit(): void { }

  public openModal(): void {
    this.modalComponent.showModalDialog();
  }
}
