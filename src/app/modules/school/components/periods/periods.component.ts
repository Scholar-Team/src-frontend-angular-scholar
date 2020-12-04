import { DirectorService } from './../../services/director.service';
import { Period } from './../../model/period-model';
import { SchoolService } from '@school/services/school.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-periods',
  templateUrl: './periods.component.html',
  styleUrls: ['./periods.component.css']
})
export class PeriodsComponent implements OnInit {

  public periods: any;

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

}
