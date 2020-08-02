import { TestBed } from '@angular/core/testing';

import { CalUiService } from './cal-ui.service';

describe('CalUiService', () => {
  let service: CalUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
