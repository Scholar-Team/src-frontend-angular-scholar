import { Student } from './../../model/student-model';
import { SchoolService } from '@school/services/school.service';
import { DirectorService } from '@school/services/director.service';
import { Classroom } from './../../model/classroom-model';
import { faFingerprint, faLock, faSignature, faEnvelope, faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentService } from './../../services/student.service';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-register-student',
  templateUrl: './register-student.component.html',
  styleUrls: ['./register-student.component.css']
})
export class RegisterStudentComponent implements OnInit {

  @ViewChild('directorPicture')
  private directorPicture: ElementRef;

  public classrooms: any;

  public faEnvelope = faEnvelope;
  public faSignature = faSignature;
  public faLock = faLock;
  public faFingerPrint = faFingerprint;
  public faAddressCard = faAddressCard;

  public displayModal: boolean;
  public formGroup: FormGroup;
  public uploadedFile: any;

  constructor(
    private studentService: StudentService,
    private directorService: DirectorService,
    private schoolService: SchoolService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
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
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
      cpf: ['', [Validators.required]],
      classroom: [0, [Validators.required]]
    });
  }

  public registerDirector(): void {
    const formData = new FormData();

    const classroom: Classroom = {
      id: this.formGroup.value.classroom
    };

    const student: Student = {
      name: this.formGroup.value.name,
      email: this.formGroup.value.email,
      password: this.formGroup.value.password,
      cpf: this.formGroup.value.cpf,
      classroom
    };

    const blobOverrides = new Blob([JSON.stringify(student)], {
      type: 'application/json',
    });

    formData.append('student', blobOverrides);
    formData.append('file', this.uploadedFile);

    this.studentService.post(formData).subscribe(r => {
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
