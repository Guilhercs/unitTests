import { TestBed } from '@angular/core/testing';

import { ApiService } from './api-service.service';
import { TagInterface } from '../../interface/tag-intergace';
import { of } from 'rxjs';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

describe('ApiService', () => {
  let service: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService],
    });
    service = TestBed.inject(ApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#createTag', () => {
    it('should create a tag', () => {
      let tags: TagInterface = { id: '1', name: 'Clarice' };
      service.createTag('Clarice').subscribe((response) => {
        tags = response;
      });
      expect(tags).toEqual({ id: '1', name: 'Clarice' });
    });
  });

  describe('#getTags', () => {
    it('should return a list of tags', () => {
      let tags: TagInterface[] = [
        {
          id: '1',
          name: 'Clarice',
        },
      ];
      service.getTags().subscribe((response) => {
        tags = response;
      });
      expect(tags).toEqual([{ id: '1', name: 'Clarice' }]);
    });
  });
});
