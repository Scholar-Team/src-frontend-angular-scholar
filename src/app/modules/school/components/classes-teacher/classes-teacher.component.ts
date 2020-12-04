import { ModalComponent } from '@modules/landing/components/modal/modal.component';
import { TeacherService } from './../../services/teacher.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-classes-teacher',
  templateUrl: './classes-teacher.component.html',
  styleUrls: ['./classes-teacher.component.css']
})
export class ClassesTeacherComponent implements OnInit {

  public classes: any;

  @ViewChild('modalComponent')
  private modalComponent: ModalComponent;

  constructor(
    private teacherService: TeacherService
  ) {
    this.teacherService.findClassesById(Number(localStorage.getItem('person_id'))).subscribe(r => {
      this.classes = r.data;
    });
  }

  ngOnInit(): void { }

  public openModal(): void {
    this.modalComponent.showModalDialog();
  }

}
