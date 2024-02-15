import { Injectable, inject } from '@angular/core';
import { UserInterface } from '../../interface/user-interface';
import { UtilsService } from '../../utils/utils';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})


export class UserInterfaceService {
  #utilService = inject(UtilsService);
  users$ = new BehaviorSubject<UserInterface[]>([]);

  addUser(user: UserInterface): void {
    this.users$.next([...this.users$.getValue(), user]);
  }

  removeUser(userId: string): void {
    const updatedUsers = this.users$
      .getValue()
      .filter((user) => userId !== user.id);
    this.users$.next(updatedUsers);
  }

  getUsernames(): string[] {
    return this.#utilService.pluck(this.users$.getValue(), 'name');
  }
}
