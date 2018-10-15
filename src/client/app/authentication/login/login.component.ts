import { FormControlsService } from './../../core/service/form-controls.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserLoginDto } from '../../../../shared/dto/user/UserLoginDto';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private formControlsService: FormControlsService,
    private userService: UserService
  ) { }

  validateForm: FormGroup;

  ngOnInit() {
    this.validateForm = this.fb.group({
      mail: [ null, [ Validators.required ] ],
      password: [ null, [ Validators.required ] ]
    });
  }

  submitForm() {
    this.formControlsService.validateControls(this.validateForm.controls);
    if (this.validateForm.valid) {
      const user: UserLoginDto = this.validateForm.value;
      console.log(this.userService.login(user));
      this.userService.login(user).subscribe(e => console.log(e));
    }
  }

}
