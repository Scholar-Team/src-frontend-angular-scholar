import { LandingComponent } from './../../pages/landing/landing.component';
import { LoginModalComponent } from './../login-modal/login-modal.component';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  @ViewChild('loginModal')
  private modalRef: LoginModalComponent;

  constructor() {}

  ngOnInit(): void {}

  public openModalLogin(): void {
    this.modalRef.displayModal = true;
  }
}
