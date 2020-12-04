import { ClassroomService } from './../../services/classroom.service';
import { Classroom } from './../../model/classroom-model';
import { Period } from './../../model/period-model';
import { Router } from '@angular/router';
import { DisciplineService } from './../../services/discipline.service';
import { SchoolService } from '@school/services/school.service';
import { DirectorService } from '@school/services/director.service';
import { TeacherService } from './../../services/teacher.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { faEnvelope, faSignature, faLock, faFingerprint, faAddressCard, faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-register-classroom',
  templateUrl: './register-classroom.component.html',
  styleUrls: ['./register-classroom.component.css']
})
export class RegisterClassroomComponent implements OnInit {

  @ViewChild('directorPicture')
  private directorPicture: ElementRef;

  public periods: any;

  public faEnvelope = faEnvelope;
  public faSignature = faSignature;
  public faLock = faLock;
  public faFingerPrint = faFingerprint;
  public faAddressCard = faAddressCard;
  public faTeacher = faChalkboardTeacher;

  public displayModal: boolean;
  public formGroup: FormGroup;
  public uploadedFile: any;

  constructor(
    private teacherService: TeacherService,
    private directorService: DirectorService,
    private schoolService: SchoolService,
    private formBuilder: FormBuilder,
    private disciplineService: DisciplineService,
    private classroomService: ClassroomService,
    private router: Router
  ) {
    this.directorService.findById(Number(localStorage.getItem('person_id'))).subscribe(r => {
      this.schoolService.findPeriodsById(r.school.id).subscribe(re => {
        this.periods = re.data;
      });
    });

    this.initForm();
  }

  ngOnInit(): void { }

  private initForm(): void {
    this.formGroup = this.formBuilder.group({
      name: ['', Validators.required],
      period: ['', [Validators.required]],
    });
  }

  public registerDirector(): void {
    const formData = new FormData();

    const period: Period = {
      id: this.formGroup.value.period
    };

    const discipline: Classroom = {
      name: this.formGroup.value.name,
      period
    };

    const blobOverrides = new Blob([JSON.stringify(discipline)], {
      type: 'application/json',
    });

    formData.append('classroom', blobOverrides);
    formData.append('file', this.uploadedFile);

    this.classroomService.post(formData).subscribe(r => {
    });
  }

  public onFileChange(event: any): void {
    if (event.files && event.files[0]) {
      this.uploadedFile = event.files[0];

      const reader = new FileReader();
      reader.readAsDataURL(this.uploadedFile);

      reader.onload = () => {
        this.directorPicture.nativeElement.src = reader.result;
      };
    }
  }

}
