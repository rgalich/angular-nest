import { TransfertDto } from './../../../../shared/dto/ant/transfert.dto';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { RightDto } from '../../../../shared/dto/right/right.dto';
import { RightGroupCreateDto } from '../../../../shared/dto/right/right-group-create.dto';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormControlsService } from 'app/core/service/form-controls.service';

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.css']
})
export class RightComponent implements OnInit {

  validateForm: FormGroup;
  rights: RightDto[];
  transfertSource: TransfertDto[];

  constructor(private route: ActivatedRoute, private fb: FormBuilder, private formControlsService: FormControlsService) { }

  ngOnInit() {
    this.rights = this.route.snapshot.data['rights'];
    this.transfertSource = this.rights.map(e => new TransfertDto(e, 'right'));

    this.validateForm = this.fb.group({
      libelle: [ '', [ Validators.required ] ]
    });
  }

  submitForm() {
    this.formControlsService.validateControls(this.validateForm.controls);
    if (this.validateForm.valid) {
      const rightGroupCreate = new RightGroupCreateDto();
      rightGroupCreate.libelle = this.validateForm.value.libelle;
      rightGroupCreate.rightsId = this.transfertSource.filter(e => e.direction === 'left').map(e => e.id);
    }
  }

  resetForm(event) {
    event.preventDefault();
  }

}
