import { StudentService } from './../../services/student.service';
import { ModalComponent } from '@modules/landing/components/modal/modal.component';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent implements OnInit {

  public classes: any;

  @ViewChild('modalComponent')
  private modalComponent: ModalComponent;

  constructor(
    private studentService: StudentService
  ) {
    this.studentService.findClassesById(Number(localStorage.getItem('person_id'))).subscribe(r => {
      this.classes = r.data;
    });
  }

  ngOnInit(): void { }

  public openModal(id: number): void {
    localStorage.setItem('class_id', id.toString());
    this.modalComponent.showModalDialog();
  }

}
