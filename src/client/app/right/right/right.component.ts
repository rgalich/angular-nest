import { TransfertDto } from './../../../../shared/dto/ant/transfert.dto';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { RightDto } from '../../../../shared/dto/right/right.dto';
import { TransfertChangeDto } from '../../../../shared/dto/ant/transfert-change.dto';
import { RightGroupCreateDto } from '../../../../shared/dto/right/right-group-create.dto';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormControlsService } from 'app/core/service/form-controls.service';
import { RightService } from 'app/service/right.service';
import { NzMessageService } from 'ng-zorro-antd';
import { Location } from '@angular/common';
import { RightGroupDetailDto } from '../../../../shared/dto/right/right-group-detail.dto';

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.css']
})
export class RightComponent implements OnInit {

  validateForm: FormGroup;
  rights: RightDto[];
  rightGroupDetail: RightGroupDetailDto;
  transfertSource: TransfertDto[];
  isEdit = false;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private fb: FormBuilder,
    private formControlsService: FormControlsService,
    private rightService: RightService,
    private message: NzMessageService
  ) { }

  ngOnInit() {
    if (this.route.snapshot.data['rightGroupDetail']) {
      this.isEdit = true;
      this.rightGroupDetail = this.route.snapshot.data['rightGroupDetail'];
      this.rights = this.rightGroupDetail.rights;
      this.transfertSource = this.rights.map(
        right => new TransfertDto(
          right,
          this.rightGroupDetail.rightsId.find(rightId => rightId === right.id) ? 'left' : 'right'
        )
      );
    } else {
      this.rights = this.route.snapshot.data['rights'];
      this.transfertSource = this.rights.map(e => new TransfertDto(e, 'right'));
    }

    this.validateForm = this.fb.group({
      libelle: [ this.rightGroupDetail ? this.rightGroupDetail.libelle : '' , [ Validators.required ] ]
    });
  }

  change(event: TransfertChangeDto) {
    event.list.forEach(e => e.direction = event.to);
  }

  submitForm() {

    this.formControlsService.validateControls(this.validateForm.controls);
    if (this.validateForm.valid) {
      const rightGroupCreate = new RightGroupCreateDto();
      rightGroupCreate.id = this.rightGroupDetail ? this.rightGroupDetail.id : 0;
      rightGroupCreate.libelle = this.validateForm.value.libelle;
      rightGroupCreate.rightsId = this.transfertSource.filter(e => e.direction === 'left').map(e => e.id);
      this.rightService.create(rightGroupCreate).subscribe(() => {
        this.message.create('success', this.libelleMessageSubmit);
        this.location.back();
      });
    }
  }

  previousRoute(event) {
    event.preventDefault();
    this.location.back();
  }

  get libelleButtonSubmit() {
    return this.isEdit ? 'Modifier' : 'Créer';
  }

  get libelleMessageSubmit() {
    return `Le groupe utilisateur est ${this.isEdit ? 'modifié' : 'créé'}.`;
  }

}
