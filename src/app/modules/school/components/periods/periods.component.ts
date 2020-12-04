import { ModalComponent } from '@modules/landing/components/modal/modal.component';
import { DirectorService } from './../../services/director.service';
import { Period } from './../../model/period-model';
import { SchoolService } from '@school/services/school.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-periods',
  templateUrl: './periods.component.html',
  styleUrls: ['./periods.component.css']
})
export class PeriodsComponent implements OnInit {

  public periods: any;

  @ViewChild('modalComponent')
  private modalComponent: ModalComponent;

  constructor(
    private schoolService: SchoolService,
    private directorService: DirectorService
  ) {
    this.directorService.findById(Number(localStorage.getItem('person_id'))).subscribe(r => {
      this.schoolService.findPeriodsById(r.school.id).subscribe(re => {
        this.periods = re.data;
      });
    });
  }

  ngOnInit(): void { }

  public openModal(): void {
    this.modalComponent.showModalDialog();
  }

}
