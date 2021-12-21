import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Users } from '../../../../../common/users';

@Injectable({ providedIn: 'root' })
export class UsersState {
  private loading: BehaviorSubject<boolean> = new BehaviorSubject(
    false as boolean
  );
  private usersTable: BehaviorSubject<Users[]> = new BehaviorSubject(
    [] as Users[]
  );

  public isLoading() {
    return this.loading.asObservable();
  }

  public setLoading(loading: boolean) {
    this.loading.next(loading);
  }

  public getUsersTable() {
    return this.usersTable.asObservable();
  }

  public setUsers(newUsers: Users[]) {
    this.usersTable.next(newUsers);
  }
}
