import { ClassService } from './../../services/class.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-class',
  templateUrl: './view-class.component.html',
  styleUrls: ['./view-class.component.css']
})
export class ViewClassComponent implements OnInit {

  public class: any;

  constructor(
    private classService: ClassService
  ) { }

  ngOnInit(): void {
    this.classService.findById(Number(localStorage.getItem('class_id'))).subscribe(r => {
      this.class = r;
    });
  }

}
