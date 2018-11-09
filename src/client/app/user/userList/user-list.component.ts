import { Component, OnInit } from '@angular/core';
import { UserWhithPaginationDto } from '../../../../shared/dto/user/user-with-pagination.dto';
import { UserService } from 'app/service/user.service';
import { Subject } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';

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
      tap(() => this.loading = true),
      switchMap(page => this.userService.findAll(page - 1, 2))
    ).subscribe(usersPagination => {
      this.usersPagination = usersPagination;
      this.loading = false;
    });

    this.pageSubject.next(1);
  }

  changePage(page: number) {
    this.pageSubject.next(page);
  }

  get isPagination() {
    return this.usersPagination.pageTotal > 1 ? true : false;
  }

  get sizeScroll() {
    return this.isPagination ? 'calc(100vh - 305px)' : 'calc(100vh - 241px)';
  }

}
