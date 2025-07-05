import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { TradeTableComponent } from './trade-table.component';

describe('TradeTable', () => {
  let component: TradeTableComponent;
  let fixture: ComponentFixture<TradeTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TradeTableComponent ,    HttpClientTestingModule,
]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TradeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
// This test checks that the default filter value is 'ALL' when the component is created

  it('should have default filter set to ALL', () => {
  expect(component.filter).toBe('ALL');
});

});
