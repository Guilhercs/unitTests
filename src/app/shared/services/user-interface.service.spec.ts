import { TestBed } from '@angular/core/testing';

import { UserInterfaceService } from './user-interface.service';
import { UserInterface } from '../interface/user-interface';

describe('UserInterfaceService', () => {
  let service: UserInterfaceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserInterfaceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#addUser', () => {
    it('should add a user', () => {
      const user: UserInterface = {
        id: '2',
        name: 'Clarice',
      };

      service.addUser(user);

      expect(service.users).toEqual([user]);
    });
  });

  describe('#removeUser', () => {
    it('should remove a user', () => {
      service.users = [{ id: '2', name: 'Clarice' }];

      service.removeUser('2');

      expect(service.users).toEqual([]);
    });
  });
});
