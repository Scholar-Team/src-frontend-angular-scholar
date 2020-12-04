import { ModalComponent } from '@modules/landing/components/modal/modal.component';
import { Component, OnInit, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  @Input() modalComponent: ModalComponent;

  constructor() { }

  ngOnInit(): void { }

  public openModal(): void {
    this.modalComponent.showModalDialog();
  }

}
