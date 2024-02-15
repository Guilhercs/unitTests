import { TestBed } from '@angular/core/testing';

import { UserInterfaceService } from './user-interface.service';
import { UserInterface } from '../../interface/user-interface';
import { UtilsService } from '../../utils/utils';

describe('UserInterfaceService', () => {
  let service: UserInterfaceService;
  const utilsServiceMock = {
    pluck: jest.fn(),
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UserInterfaceService,
        { provide: UtilsService, useValue: utilsServiceMock },
      ],
    });
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

      expect(service.users$.getValue()).toEqual([user]);
    });
  });

  describe('#removeUser', () => {
    it('should remove a user', () => {
      service.users$.next([{ id: '2', name: 'Clarice' }]);

      service.removeUser('2');

      expect(service.users$.getValue()).toEqual([]);
    });
  });

  describe('#getUsernames', () => {
    it('should get usernames', () => {
      jest
        .spyOn(TestBed.inject(UtilsService), 'pluck')
        .mockReturnValue(['foo']);
      //utilsServiceMock.pluck.mockReturnValue(['foo']);
      expect(service.getUsernames()).toEqual(['foo']);
    });
  });
});
