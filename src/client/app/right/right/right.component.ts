import { Component, OnInit } from '@angular/core';
import { RightGroupDto } from '../../../../shared/dto/right/right-group.dto';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.css']
})
export class RightComponent implements OnInit {

  rightGroups: RightGroupDto;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.rightGroups = this.route.snapshot.data['rightGroups'];
    console.log(this.rightGroups);
  }

}
