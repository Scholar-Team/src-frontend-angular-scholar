import { Router } from '@angular/router';
import { SchoolService } from '@school/services/school.service';
import { DirectorService } from '@school/services/director.service';
import { Teacher } from './../../model/teacher-model';
import { TeacherService } from './../../services/teacher.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { faEnvelope, faSignature, faLock, faFingerprint, faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-register-teacher',
  templateUrl: './register-teacher.component.html',
  styleUrls: ['./register-teacher.component.css']
})
export class RegisterTeacherComponent implements OnInit {

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
    private teacherService: TeacherService,
    private directorService: DirectorService,
    private schoolService: SchoolService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
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
    });
  }

  public registerDirector(): void {
    const formData = new FormData();

    const student: Teacher = {
      name: this.formGroup.value.name,
      email: this.formGroup.value.email,
      password: this.formGroup.value.password,
      cpf: this.formGroup.value.cpf
    };

    const blobOverrides = new Blob([JSON.stringify(student)], {
      type: 'application/json',
    });

    formData.append('teacher', blobOverrides);
    formData.append('file', this.uploadedFile);

    this.teacherService.post(formData).subscribe(r => {
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
