import { Component, OnInit } from '@angular/core';
import aos from 'aos';

@Component({
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    aos.init();
  }

}
