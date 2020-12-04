import { School } from './../../../school/model/school-model';
import { Director } from './../../../school/model/director-model';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { faSignature, faEnvelope, faLock, faFingerprint } from '@fortawesome/free-solid-svg-icons';
import { DirectorService } from '@school/services/director.service';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-register-director',
  templateUrl: './register-director.component.html',
  styleUrls: ['./register-director.component.css']
})
export class RegisterDirectorComponent implements OnInit {

  @ViewChild('directorPicture')
  private directorPicture: ElementRef;

  public faEnvelope = faEnvelope;
  public faSignature = faSignature;
  public faLock = faLock;
  public faFingerPrint = faFingerprint;

  public displayModal: boolean;
  public formGroup: FormGroup;
  public uploadedFile: any;

  constructor(
    private directorService: DirectorService,
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

    const school: School = {
      id: Number(localStorage.getItem('school_id'))
    };

    const director: Director = {
      name: this.formGroup.value.name,
      email: this.formGroup.value.email,
      password: this.formGroup.value.password,
      cpf: this.formGroup.value.cpf,
      school
    };

    const blobOverrides = new Blob([JSON.stringify(director)], {
      type: 'application/json',
    });

    formData.append('director', blobOverrides);
    formData.append('file', this.uploadedFile);

    this.directorService.post(formData).subscribe(r => {
      this.router.navigate(['../login']);
    });

    this.router.navigate(['../login']);
  }

  public onFileChange(event: any): void {
    /*if (event.files && event.files[0]) {
      this.uploadedFile = event.files[0];

      const reader = new FileReader();
      reader.readAsDataURL(this.uploadedFile);

      reader.onload = () => {
        this.directorPicture.nativeElement.src = reader.result;
      };
    }*/
  }

}
