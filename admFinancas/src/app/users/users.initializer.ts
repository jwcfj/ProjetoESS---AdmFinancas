import { APP_INITIALIZER } from '@angular/core';
import { UsersFacade } from './users.facade';

export const usersInitializer = (expensesFacade: UsersFacade) => () => {
  expensesFacade.fetchExpensesTable();
};

export const usersInitializerProvider = {
  provide: APP_INITIALIZER,
  useFactory: usersInitializer,
  multi: true,
  deps: [UsersFacade],
};
