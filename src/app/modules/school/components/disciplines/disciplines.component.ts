import { DirectorService } from '@school/services/director.service';
import { SchoolService } from '@school/services/school.service';
import { ModalComponent } from '@modules/landing/components/modal/modal.component';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-disciplines',
  templateUrl: './disciplines.component.html',
  styleUrls: ['./disciplines.component.css']
})
export class DisciplinesComponent implements OnInit {

  public disciplines: any;

  @ViewChild('modalComponent')
  private modalComponent: ModalComponent;

  constructor(
    private schoolService: SchoolService,
    private directorService: DirectorService
  ) {
    this.directorService.findById(Number(localStorage.getItem('person_id'))).subscribe(r => {
      this.schoolService.findDisciplinesById(r.school.id).subscribe(re => {
        this.disciplines = re.data;
      });
    });
  }

  ngOnInit(): void {
  }

  public openModal(): void {
    this.modalComponent.showModalDialog();
  }

}
