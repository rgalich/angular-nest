import { FormControlsService } from './../../core/service/form-controls.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder, private formControlsService: FormControlsService) { }

  validateForm: FormGroup;

  ngOnInit() {
    this.validateForm = this.fb.group({
      mail: [ null, [ Validators.required ] ],
      password: [ null, [ Validators.required ] ]
    });
  }

  submitForm() {
    this.formControlsService.validateControls(this.validateForm.controls);
  }

}
