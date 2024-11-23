import { TestBed } from '@angular/core/testing';

import { AppService } from './app.service';
import { PLATFORM_ID } from '@angular/core';

describe('AppService', () => {
  let service: AppService;

  describe('in Browser environment', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({});
      service = TestBed.inject(AppService);
    });

    it('should be created', () => {
      expect(service).toBeTruthy();
    });

    it('should return true for isBrowser', () => {
      expect(service.isBrowser).toBe(true);
    });
  });

  describe('in Server environment', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [
          AppService,
          { provide: PLATFORM_ID, useValue: 'server' }, // Mock as server
        ],
      });
      service = TestBed.inject(AppService);
    });

    it('should be created', () => {
      expect(service).toBeTruthy();
    });

    it('should return false for isBrowser', () => {
      expect(service.isBrowser).toBe(false);
    });
  });
});
