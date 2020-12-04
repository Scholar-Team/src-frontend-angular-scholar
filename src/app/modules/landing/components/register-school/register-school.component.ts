import { School } from '@school/model/school-model';
import { Router } from '@angular/router';
import { SchoolService } from '@school/services/school.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { faGlobe, faSchool, faSignature } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-register-school',
  templateUrl: './register-school.component.html',
  styleUrls: ['./register-school.component.css']
})
export class RegisterSchoolComponent implements OnInit {

  @ViewChild('schoolPicture')
  private schoolPicture: ElementRef;

  public faGlobe = faGlobe;
  public faSignature = faSignature;
  public faSchool = faSchool;

  public formGroup: FormGroup;
  public uploadedFile: any;

  constructor(
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
      site: ['', [Validators.required]],
      type: ['ESTADUAL', [Validators.required]],
    });
  }

  public registerSchool(): void {
    const formData = new FormData();

    const school: School = {
      name: this.formGroup.value.name,
      site: this.formGroup.value.site,
      type: this.formGroup.value.type
    };

    const blobOverrides = new Blob([JSON.stringify(school)], {
      type: 'application/json',
    });

    formData.append('school', blobOverrides);
    formData.append('file', this.uploadedFile);

    this.schoolService.post(formData).subscribe(r => {
      console.log(r);
      localStorage.setItem('school_id', `${r.id}`);
      this.router.navigate(['../register-director']);

    }, (error) => {
      console.log(error);
    });
  }

  public onFileChange(event: any): void {
    /*if (event.files && event.files[0]) {
      this.uploadedFile = event.files[0];

      const reader = new FileReader();
      reader.readAsDataURL(this.uploadedFile);

      reader.onload = () => {
        this.schoolPicture.nativeElement.src = reader.result;
      };
    }*/
  }

}
