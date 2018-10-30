import { TransfertDto } from './../../../../shared/dto/ant/transfert.dto';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { RightDto } from '../../../../shared/dto/right/right.dto';

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.css']
})
export class RightComponent implements OnInit {

  rights: RightDto[];
  transfertSource: TransfertDto[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.rights = this.route.snapshot.data['rights'];
    this.transfertSource = this.rights.map(e => new TransfertDto(e));
  }

  submitForm() {
    
  }

}
