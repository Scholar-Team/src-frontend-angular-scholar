import { DisciplineService } from './../../services/discipline.service';
import { Teacher } from './../../model/teacher-model';
import { Classroom } from './../../model/classroom-model';
import { Discipline } from './../../model/discipline-model';
import { faEnvelope, faSignature, faLock, faFingerprint, faAddressCard, faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { SchoolService } from '@school/services/school.service';
import { DirectorService } from '@school/services/director.service';
import { TeacherService } from './../../services/teacher.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-register-discipline',
  templateUrl: './register-discipline.component.html',
  styleUrls: ['./register-discipline.component.css']
})
export class RegisterDisciplineComponent implements OnInit {

  @ViewChild('directorPicture')
  private directorPicture: ElementRef;

  public classrooms: any;
  public teachers: any;

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
    private router: Router
  ) {
    this.teacherService.findAll().subscribe(r => {
      this.teachers = r.data;
    });

    this.directorService.findById(Number(localStorage.getItem('person_id'))).subscribe(r => {
      this.schoolService.findClassroomsById(r.school.id).subscribe(re => {
        this.classrooms = re.data;
      });
    });

    this.initForm();
  }

  ngOnInit(): void { }

  private initForm(): void {
    this.formGroup = this.formBuilder.group({
      name: ['', Validators.required],
      classroom: ['', [Validators.required]],
      teacher: ['', [Validators.required]],
    });
  }

  public registerDirector(): void {
    const formData = new FormData();

    const teacher: Teacher = {
      id: this.formGroup.value.teacher
    };

    const classroom: Classroom = {
      id: this.formGroup.value.classroom
    };

    const discipline: Discipline = {
      name: this.formGroup.value.name,
      teachers: [
        teacher
      ],
      classrooms: [
        classroom
      ]
    };

    const blobOverrides = new Blob([JSON.stringify(discipline)], {
      type: 'application/json',
    });

    formData.append('discipline', blobOverrides);
    formData.append('file', this.uploadedFile);

    this.disciplineService.post(formData).subscribe(r => {
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
