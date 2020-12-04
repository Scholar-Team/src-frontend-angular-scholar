import { TeacherService } from './../../services/teacher.service';
import { ModalComponent } from '@modules/landing/components/modal/modal.component';
import { DirectorService } from '@school/services/director.service';
import { SchoolService } from '@school/services/school.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {

  public teachers: any;

  @ViewChild('modalComponent')
  private modalComponent: ModalComponent;

  constructor(
    private schoolService: SchoolService,
    private directorService: DirectorService,
    private teacherService: TeacherService
  ) {
    /*this.directorService.findById(Number(localStorage.getItem('person_id'))).subscribe(r => {
      this.schoolService.findTeachersById(r.school.id).subscribe(re => {
        this.teachers = re.data;
      });
    });*/

    this.teacherService.findAll().subscribe(r => {
      this.teachers = r.data;
    });
  }

  ngOnInit(): void { }

  public openModal(): void {
    this.modalComponent.showModalDialog();
  }
}
