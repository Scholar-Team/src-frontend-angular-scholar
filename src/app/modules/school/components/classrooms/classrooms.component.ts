import { ModalComponent } from '@modules/landing/components/modal/modal.component';
import { DirectorService } from '@school/services/director.service';
import { School } from '@school/model/school-model';
import { SchoolService } from '@school/services/school.service';
import { Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-classrooms',
  templateUrl: './classrooms.component.html',
  styleUrls: ['./classrooms.component.css']
})
export class ClassroomsComponent implements OnInit {

  public classrooms: any;

  @ViewChild('modalComponent')
  private modalComponent: ModalComponent;

  constructor(
    private schoolService: SchoolService,
    private directorService: DirectorService
  ) {
    this.directorService.findById(Number(localStorage.getItem('person_id'))).subscribe(r => {
      this.schoolService.findClassroomsById(r.school.id).subscribe(re => {
        this.classrooms = re.data;
      });
    });
  }

  ngOnInit(): void { }

  public openModal(): void {
    this.modalComponent.showModalDialog();
  }

}
