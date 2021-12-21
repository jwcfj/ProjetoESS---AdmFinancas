import { Injectable } from '@angular/core';
import { Users } from '../../../../common/users';
import { UsersApi } from './api/users.api';
import { UsersState } from './state/users.state';

@Injectable()
export class UsersFacade {
  //private originalUsers: Users[] = [];

  public constructor(
    private readonly state: UsersState,
    private readonly api: UsersApi
  ) {}

  public getUsers() {
    return this.api.getUsers();
  }

  public fetchExpensesTable() {
    this.state.setLoading(true);
    this.api.getUsers().subscribe({
      next: (data) => {
        this.state.setUsers(data);
      },
      complete: () => this.state.setLoading(false),
    });
  }

  public insertUser(user: Users) {
    return this.api.insertUser(user);
  }

  public updateUser(user: Users) {
    return this.api.updateUser(user);
  }

  public deleteUser(id: number) {
    return this.api.deleteUser(id);
  }

  public isLoading() {
    return this.state.isLoading();
  }
}
