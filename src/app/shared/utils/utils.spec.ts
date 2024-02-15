import { TestBed } from '@angular/core/testing';
import { UtilsService } from './utils';

describe('utils', () => {
  let service: UtilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UtilsService],
    });
    service = TestBed.inject(UtilsService);
  });

  describe('range', () => {
    it('returns correct range from 1 to 5', () => {
      expect(service.range(1, 5)).toEqual([1, 2, 3, 4]);
    });
  });
  describe('pluck', () => {
    it('return correct result', () => {
      const data = [
        { id: '1', name: 'foo' },
        { id: '2', name: 'bar' },
        { id: '3', name: 'baz' },
      ];
      expect(service.pluck(data, 'id')).toEqual(['1', '2', '3']);
    });
  });
});
