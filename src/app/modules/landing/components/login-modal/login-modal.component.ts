import { AuthService } from '@core/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent implements OnInit {

  faEnvelope = faEnvelope;
  faLock = faLock;

  displayModal: boolean;
  public formGroup: FormGroup;

  constructor(
    private service: AuthService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  public showModalDialog(): void {
    this.displayModal = true;
  }

  private initForm(): void {
    this.formGroup = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required]]
    });
  }

  public login(): void {
    /*if (this.formGroup.invalid) {
      return;
    }*/

    const username = this.formGroup.value.username;
    const password = this.formGroup.value.password;

    this.service.postLogin(username, password);
  }

}
