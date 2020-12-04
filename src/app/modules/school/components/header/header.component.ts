import { PersonService } from './../../../person/services/person.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @ViewChild('imgUser')
  public imgUser: ElementRef;

  @ViewChild('name')
  public name: ElementRef;

  public faSignOutAlt = faSignOutAlt;

  constructor(
    private personService: PersonService
  ) {
    this.personService.findById(Number(localStorage.getItem('person_id'))).subscribe(r => {
      this.imgUser.nativeElement.src = r.file.url;
      this.name.nativeElement.innerHTML = r.name;
    });
  }

  ngOnInit(): void { }

}
