import { FormControlsService } from './../../core/service/form-controls.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../service/user.service';
import { UserCreateDto } from '../../../../shared/dto/user/UserCreateDto';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private formControlsService: FormControlsService,
    private userService: UserService
  ) { }

  validateForm: FormGroup;

  ngOnInit() {
    this.validateForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      mail: [ '', [ Validators.required ] ],
      password: [ '', [ Validators.required ] ]
    });
  }

  submitForm() {
    this.formControlsService.validateControls(this.validateForm.controls);
    if (this.validateForm.valid) {
      const user: UserCreateDto = this.validateForm.value;
      this.userService.register(user).subscribe(e => console.log(e));
    }
  }

}
