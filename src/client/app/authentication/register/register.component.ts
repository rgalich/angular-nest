import { FormControlsService } from './../../core/service/form-controls.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private fb: FormBuilder, private formControlsService: FormControlsService) { }

  validateForm: FormGroup;

  ngOnInit() {
    this.validateForm = this.fb.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      mail: [ null, [ Validators.required ] ],
      password: [ null, [ Validators.required ] ]
    });
  }

  submitForm() {
    this.formControlsService.validateControls(this.validateForm.controls);
  }

}
