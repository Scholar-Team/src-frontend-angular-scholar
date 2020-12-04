import { DirectorService } from '@school/services/director.service';
import { SchoolService } from '@school/services/school.service';
import { ModalComponent } from '@modules/landing/components/modal/modal.component';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  public students: any;

  @ViewChild('modalComponent')
  private modalComponent: ModalComponent;

  constructor(
    private schoolService: SchoolService,
    private directorService: DirectorService
  ) {
    this.directorService.findById(Number(localStorage.getItem('person_id'))).subscribe(r => {
      this.schoolService.findStudentsById(r.school.id).subscribe(re => {
        this.students = re.data;
      });
    });
  }

  ngOnInit(): void { }

  public openModal(): void {
    this.modalComponent.showModalDialog();
  }

}
