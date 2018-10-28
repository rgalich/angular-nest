import { Component, OnInit } from '@angular/core';
import { AllRightAndRightGroupDto } from '../../../../shared/dto/right/all-right-and-right-group.dto';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.css']
})
export class RightComponent implements OnInit {

  rightsRightGroups: AllRightAndRightGroupDto;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.rightsRightGroups = this.route.snapshot.data['rightsRightGroups'];
    console.log(this.rightsRightGroups);
  }

}
