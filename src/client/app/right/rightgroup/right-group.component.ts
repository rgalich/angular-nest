import { Component, OnInit } from '@angular/core';
import { RightGroupDto } from '../../../../shared/dto/right/right-group.dto';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-right',
  templateUrl: './right-group.component.html',
  styleUrls: ['./right-group.component.css']
})
export class RightGroupComponent implements OnInit {

  rightGroups: RightGroupDto;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.rightGroups = this.route.snapshot.data['rightGroups'];
  }

}
