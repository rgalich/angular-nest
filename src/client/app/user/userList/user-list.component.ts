import { Component, OnInit } from '@angular/core';
import { UserWhithPaginationDto } from '../../../../shared/dto/user/user-with-pagination.dto';
import { UserService } from 'app/service/user.service';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  constructor(private userService: UserService) {
  }

  usersPagination: UserWhithPaginationDto = { users: [], pageTotal: 0 };
  pageSubject = new Subject<number>();
  loading = true;

  ngOnInit() {
    this.pageSubject.pipe(
      map(e => console.log(e))
    ).subscribe(() => {});
    this.userService.findAll(0, 2).subscribe(e => {
      this.usersPagination = e;
      this.loading = false;
    });
  }

  changePage(page: number) {
    this.pageSubject.next(page);
  }

}
