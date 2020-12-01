import { Component, OnInit } from '@angular/core';
import { faBookOpen, faCodeBranch, faDatabase, faDesktop, faLaptopCode, faLeaf } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  faLeaf = faLeaf;
  faCodeBranch = faCodeBranch;
  faDatabase = faDatabase;
  faDesktop = faDesktop;

  constructor() { }

  ngOnInit(): void {
  }

}
