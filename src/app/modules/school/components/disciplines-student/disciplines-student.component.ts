import { StudentService } from './../../services/student.service';
import { ModalComponent } from '@modules/landing/components/modal/modal.component';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-disciplines-student',
  templateUrl: './disciplines-student.component.html',
  styleUrls: ['./disciplines-student.component.css']
})
export class DisciplinesStudentComponent implements OnInit {

  public disciplines: any;

  @ViewChild('modalComponent')
  private modalComponent: ModalComponent;

  constructor(
    private studentService: StudentService
  ) { }

  ngOnInit(): void {
    this.studentService.findDisciplinesById(Number(localStorage.getItem('person_id'))).subscribe(r => {
      this.disciplines = r.data;
    });
  }

  public openModal(): void {
    this.modalComponent.showModalDialog();
  }

}
