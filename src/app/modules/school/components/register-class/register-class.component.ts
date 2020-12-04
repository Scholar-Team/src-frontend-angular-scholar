import { Router } from '@angular/router';
import { SchoolService } from '@school/services/school.service';
import { TeacherService } from './../../services/teacher.service';
import { faEnvelope, faSignature, faLock, faFingerprint, faAddressCard, faGlobe, faKeyboard } from '@fortawesome/free-solid-svg-icons';
import { ClassService } from './../../services/class.service';
import { Class } from './../../model/class-model';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Discipline } from './../../model/discipline-model';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-register-class',
  templateUrl: './register-class.component.html',
  styleUrls: ['./register-class.component.css']
})
export class RegisterClassComponent implements OnInit {

  @ViewChild('directorPicture')
  private directorPicture: ElementRef;

  public disciplines: any;

  public faEnvelope = faEnvelope;
  public faSignature = faSignature;
  public faLock = faLock;
  public faFingerPrint = faFingerprint;
  public faAddressCard = faAddressCard;
  public faGlobe = faGlobe;
  public faKeyboard = faKeyboard;

  public displayModal: boolean;
  public formGroup: FormGroup;
  public uploadedFile: any;

  constructor(
    private teacherService: TeacherService,
    private classService: ClassService,
    private schoolService: SchoolService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.teacherService.findById(Number(localStorage.getItem('person_id'))).subscribe(r => {
      this.disciplines = r.disciplines;
    });

    this.initForm();
  }

  ngOnInit(): void { }

  private initForm(): void {
    this.formGroup = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', [Validators.required]],
      link: ['', [Validators.required]],
      discipline: ['', [Validators.required]]
    });
  }

  public registerDirector(): void {
    const formData = new FormData();

    const discipline: Discipline = {
      id: this.formGroup.value.discipline
    };

    const classModel: Class = {
      name: this.formGroup.value.name,
      description: this.formGroup.value.description,
      link: this.formGroup.value.link,
      discipline
    };

    const blobOverrides = new Blob([JSON.stringify(classModel)], {
      type: 'application/json',
    });

    formData.append('class', blobOverrides);
    // formData.append('file', this.uploadedFile);

    this.classService.post(formData).subscribe(r => {
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
