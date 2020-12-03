import { SchoolType } from '@school/model/school-model';
import { SchoolService } from '@school/services/school.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { faGlobe, faSignature } from '@fortawesome/free-solid-svg-icons';
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

  public displayModal: boolean;
  public formGroup: FormGroup;
  public uploadedFile: any;

  constructor(
    private service: SchoolService,
    private formBuilder: FormBuilder
  ) {
    this.initForm();
  }

  ngOnInit(): void { }

  public showModalDialog(): void {
    this.displayModal = true;
  }

  private initForm(): void {
    this.formGroup = this.formBuilder.group({
      name: ['', Validators.required],
      site: ['', [Validators.required]],
      type: ['ESTADUAL', [Validators.required]],
    });
  }

  public registerSchool(): void {

  }

  public onFileChange(event: any): void {
    if (event.files && event.files[0]) {
      this.uploadedFile = event.files[0];

      const reader = new FileReader();
      reader.readAsDataURL(this.uploadedFile);

      reader.onload = () => {
        this.schoolPicture.nativeElement.src = reader.result;
      };
    }
  }

}
