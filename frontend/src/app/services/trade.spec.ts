import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

beforeEach(() => {
  TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [TradeService]
  });
});

import { TradeService  } from './trade';

describe('Trade', () => {
  let service: TradeService ;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TradeService );
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
