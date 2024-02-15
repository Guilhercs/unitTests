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
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService],
    });
    service = TestBed.inject(ApiService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#createTag', () => {
    it('should create a tag', () => {
      let tags: TagInterface | undefined;
      service.createTag('Clarice').subscribe((response) => {
        tags = response;
      });
      const req = httpTestingController.expectOne('http://localhost:3004/tags');
      req.flush([{ id: '1', name: 'Clarice' }]);
      expect(tags).toEqual({ id: '1', name: 'Clarice' });
    });
  });

  describe('#getTags', () => {
    it('should return a list of tags', () => {
      let tags: TagInterface[] | undefined;
      service.getTags().subscribe((response) => {
        tags = response;
      });
      const req = httpTestingController.expectOne('http://localhost:3004/tags');
      req.flush([{ id: '2', name: 'Clarice' }]);
      expect(tags).toEqual([{ id: '2', name: 'Clarice' }]);
    });
  });
});
