import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControlsService } from 'app/core/service/form-controls.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private fb: FormBuilder,
    private formControlsService: FormControlsService
  ) { }

  validateForm: FormGroup;

  ngOnInit() {
    this.validateForm = this.fb.group({
      firstName: [ '' , [ Validators.required ] ],
      lastName: [ '' , [ Validators.required ] ],
      mail: [ '' , [ Validators.required, Validators.email ] ],
      phone: [ '' ],
      isAdmin: [false, [ Validators.required ]]
    });
  }

  submitForm() {
    this.formControlsService.validateControls(this.validateForm.controls);
  }

  previousRoute(event) {
    event.preventDefault();
    this.location.back();
  }

  get isAdmin() {
    return this.validateForm.controls.isAdmin.value;
  }

}
